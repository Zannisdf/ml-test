import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Navbar from "./components/Navbar";
import GlobalStyle from "./assets/styles/globalStyles";
import SearchBox from "./components/SearchBox";
import Item from "./components/Item";
import Items from "./components/Items";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Helmet>
      <title>Mercado Libre</title>
    </Helmet>
    <BaseCSS />
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route exact path="/" component={SearchBox} />
      <Route path="/items/:id" component={Item} />
      <Route path="/items" component={Items} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
