import React from "react";

import { LOADING, OK } from "../../utils/loadStatus";

import Layout from "../Layout";
import Item from "./Item";
import { FullscreenSpinner } from "../shared/Spinner";
import NotFound from "../NotFound";

const View = ({ title, status, items, categories }) => (
  <>
    {status === OK && items.length !== 0 ? (
      <Layout title={title} categories={categories}>
        {items.map(item => (
          <Item key={item.id} details={item} />
        ))}
      </Layout>
    ) : status === LOADING ? (
      <FullscreenSpinner />
    ) : (
      <NotFound />
    )}
  </>
);

export default View;
