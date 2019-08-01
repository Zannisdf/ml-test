import React from "react";

import useExternalResource from "../../utils/useExternalResource";

import View from "./View";

const Item = ({ match }) => {
  const ENDPOINT = "/api/items/";
  const { id } = match.params;
  const [item, status] = useExternalResource({}, ENDPOINT + id);

  return <View status={status} categories={item.categories} item={item} />;
};
export default Item;
