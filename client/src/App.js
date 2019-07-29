import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./assets/styles/globalStyles";
import SearchBox from "./views/SearchBox";
import Items from "./views/Items";

const App = () => (
  <BrowserRouter>
    <BaseCSS />
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={SearchBox} />
      <Route path="/items" component={Items} />
    </Switch>
  </BrowserRouter>
);

export default App;
