import React from "react";

import useExternalResource from "../../utils/useExternalResource";

import View from "./View";

const Items = ({ location }) => {
  const ENDPOINT = "/api/items?q=";
  const params = new URLSearchParams(location.search);
  const query = params.get("search");
  const [results, status] = useExternalResource([], ENDPOINT + query);

  return (
    <View
      status={status}
      items={results.items}
      categories={results.categories}
    />
  );
};

export default Items;
