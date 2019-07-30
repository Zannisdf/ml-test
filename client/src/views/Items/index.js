import React, { useState, useEffect } from "react";

import View from "./View";

const Items = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: "MLA617433612",
        title: "Transformador Electronico 220/110v 2000w Carga Electronissi",
        price: {
          currency: "$",
          amount: 650,
          decimals: 2
        },
        picture:
          "http://mla-s1-p.mlstatic.com/680214-MLA31044900159_062019-I.jpg",
        condition: "new",
        free_shipping: true
      },
      {
        id: "MLA6174336123",
        title: "Transformador Electronico 220/110v 2000w Carga Electronissi",
        price: {
          currency: "$",
          amount: 650,
          decimals: 2
        },
        picture:
          "http://mla-s1-p.mlstatic.com/680214-MLA31044900159_062019-I.jpg",
        condition: "new",
        free_shipping: true
      }
    ]);
  }, []);

  return <View items={items} />;
};

export default Items;
