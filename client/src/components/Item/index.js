import React, { useState, useEffect } from "react";

import { LOADING, OK, ERROR } from "../../utils/loadStatus";

import View from "./View";

const Item = ({ match }) => {
  const ENDPOINT = "/api/items/";
  const [item, setItem] = useState({});
  const [status, setStatus] = useState(LOADING);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const { id } = match.params;

    const fetchItem = async id => {
      try {
        const response = await fetch(ENDPOINT + id, {
          method: "GET",
          signal
        });
        const itemData = await response.json();

        setItem(itemData);
        setStatus(response.status >= 200 && response.status < 300 ? OK : ERROR);
      } catch (err) {
        console.log(err.name === "AbortError" ? "Fetch aborted" : err);
      }
    };

    fetchItem(id);
    return () => controller.abort();
  }, [match.params]);

  return <View status={status} categories={item.categories} item={item} />;
};
export default Item;
