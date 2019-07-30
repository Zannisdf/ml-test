import React from "react";

import Layout from "../Layout";
import Wrapper from "./Wrapper";
import Info from "./Info";
import Description from "./Description";

const View = ({ categories, item }) => (
  <Layout categories={categories}>
    <Wrapper>
      <Info item={item} />
      <Description title="Descripción del producto" text={item.description} />
    </Wrapper>
  </Layout>
);

export default View;
