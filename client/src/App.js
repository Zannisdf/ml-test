import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchBox from "./views/SearchBox";
import GlobalStyle from "./assets/styles/globalStyles";

const App = () => (
  <BrowserRouter>
    <BaseCSS />
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={SearchBox} />
    </Switch>
  </BrowserRouter>
);

export default App;
