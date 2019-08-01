import { createGlobalStyle } from "styled-components";

import { brand } from "./colors";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    color: ${brand.black};
    background-color: ${brand.lightGray};
    font-family: Helvetica,Arial,sans-serif;
  }
`;

export default GlobalStyle;
