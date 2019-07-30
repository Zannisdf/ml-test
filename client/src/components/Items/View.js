import React from "react";

import Layout from "../Layout";
import Item from "./Item";

const View = ({ items, categories }) => (
  <Layout categories={categories}>
    {items.map(item => (
      <Item key={item.id} details={item} />
    ))}
  </Layout>
);

export default View;
