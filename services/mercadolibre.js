const fetch = require("node-fetch");
const errors = require("../utils/errors");

// Throws a custom error if the request fails
const checkStatus = req => {
  const error = new Error();
  if (req.status >= 200 && req.status < 300) {
    return;
  } else if (req.status >= 400 && req.status < 500) {
    error.message = "Resource not found";
  } else {
    error.message = "Bad Request";
  }
  error.code = req.status;
  throw error;
};

// Returns the most common category id in a group of raw items.
// In case of tie, returns the first one with most occurrence.
const getCommonCategory = items => {
  if (items.length === 0) {
    return;
  }
  const modeMap = {};
  let commonCategory = items[0].category_id;
  let maxOcurrences = 1;
  items.map(item => {
    const { category_id } = item;

    if (!modeMap) {
      modeMap[category_id] = 1;
    } else {
      modeMap[category_id]++;
    }

    if (modeMap[category_id] > maxOcurrences) {
      commonCategory = category_id;
      maxOcurrences = modeMap[category_id];
    }
  });
  return commonCategory;
};

// Returns an array with all the parent categories given a category id.
const getCategoryTree = async categoryID => {
  if (!categoryID) {
    return [];
  }
  const ENDPOINT = "https://api.mercadolibre.com/categories/";
  const response = await fetch(ENDPOINT + categoryID);
  checkStatus(response);
  const category = await response.json();
  return category.path_from_root.map(path => path.name);
};

// Returns a string with the item's condition based on its attributes.
const getCondition = attributes =>
  attributes.filter(attr => attr.id === "ITEM_CONDITION")[0].value_name;

// Returns an object containing the currency details for later usage
// when parsing a raw item to the output forman
const getPrice = async (amount, currencyID) => {
  const ENDPOINT = "https://api.mercadolibre.com/currencies/";
  const response = await fetch(ENDPOINT + currencyID);
  checkStatus(response);
  const currencyDetails = await response.json();
  return {
    amount,
    currency: currencyDetails.symbol,
    decimals: currencyDetails.decimal_places
  };
};

const getDescription = async id => {
  const ENDPOINT = "https://api.mercadolibre.com/items/";
  const SUFFIX = "/description";
  const response = await fetch(ENDPOINT + id + SUFFIX);
  checkStatus(response);
  const parsedResponse = await response.json();
  return parsedResponse.plain_text;
};

// JSON response from the api call with error handling.
const fetchItemsFromQuery = async query => {
  const ENDPOINT = "https://api.mercadolibre.com/sites/MLA/search?q=";
  const urlWithQuery = ENDPOINT + (query || "");
  const response = await fetch(urlWithQuery);
  checkStatus(response);
  const parsedResponse = await response.json();
  return parsedResponse.results;
};

const fetchItemFromID = async id => {
  const ENDPOINT = "https://api.mercadolibre.com/items/";
  const url = ENDPOINT + id;
  const response = await fetch(url);
  checkStatus(response);
  const parsedResponse = await response.json();
  return parsedResponse;
};

// Takes a raw item and returns an object with the desired output format.
const parse = async ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  attributes,
  shipping: { free_shipping }
}) => ({
  id,
  title,
  price: await getPrice(price, currency_id),
  picture: thumbnail,
  condition: getCondition(attributes),
  free_shipping
});

exports.getItem = async itemID => {
  let result;
  let err;
  try {
    const rawItem = await fetchItemFromID(itemID);
    const description = await getDescription(itemID);
    const categories = await getCategoryTree(rawItem.category_id);
    const parsedItem = await parse(rawItem);
    result = {
      categories,
      ...parsedItem,
      sold_quantity: rawItem.sold_quantity,
      description
    };
  } catch (error) {
    err = error;
  }
  return [err, result];
};

exports.getItems = async (query, author, limit) => {
  let err;
  let results;
  try {
    const rawItems = await fetchItemsFromQuery(query);
    const rawItemsWithLimit = rawItems.slice(0, limit);
    const categories = await getCategoryTree(
      getCommonCategory(rawItemsWithLimit)
    );
    // Exit early with empty array if there are no items to be parsed.
    const items =
      rawItemsWithLimit.length === 0
        ? []
        : await Promise.all(
            rawItemsWithLimit.map(async item => await parse(item))
          );
    results = {
      author,
      categories,
      items
    };
  } catch (error) {
    err = error;
  }
  return [err, results];
};
