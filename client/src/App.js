import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import GlobalStyle from "./assets/styles/globalStyles";
import SearchBox from "./components/SearchBox";
import ItemDetails from "./components/ItemDetails";
import Items from "./components/SearchResults";

const App = () => (
  <BrowserRouter>
    <BaseCSS />
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route exact path="/" component={SearchBox} />
      <Route path="/items/:id" component={ItemDetails} />
      <Route path="/items" component={Items} />
    </Switch>
  </BrowserRouter>
);

export default App;
