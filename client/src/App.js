import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";

import SearchBox from "./views/SearchBox";
import GlobalStyle from "./assets/styles/globalStyles";

const App = () => (
  <>
    <BaseCSS />
    <GlobalStyle />
    <SearchBox />
  </>
);

export default App;
