import React from "react";
import View from "./View";

const Item = () => {
  const categories = ["cat1", "cat2"];
  const item = {
    id: "MLA617433612",
    title: "Transformador Electronico 220/110v 2000w Carga Electronissi",
    price: {
      currency: "$",
      amount: 650,
      decimals: 2
    },
    picture: "http://mla-s1-p.mlstatic.com/680214-MLA31044900159_062019-I.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 0,
    description: "This is the description"
  };

  return <View categories={categories} item={item} />;
};
export default Item;
