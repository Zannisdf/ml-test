import React from "react";

import { LOADING, OK } from "../../utils/loadStatus";

import Layout from "../Layout";
import Wrapper from "./Wrapper";
import Info from "./Info";
import Description from "./Description";
import { FullscreenSpinner } from "../shared/Spinner";
import NotFound from "../NotFound";

const View = ({ status, categories, item }) => (
  <>
    {status === OK && item.id !== undefined ? (
      <Layout categories={categories}>
        <Wrapper>
          <Info item={item} />
          <Description
            title="Descripción del producto"
            text={item.description}
          />
        </Wrapper>
      </Layout>
    ) : status === LOADING ? (
      <FullscreenSpinner />
    ) : (
      <NotFound />
    )}
  </>
);

export default View;
