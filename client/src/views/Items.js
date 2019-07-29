import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";

import { brand } from "../assets/styles/colors";

import WithNavbar from "./layouts/WithNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Item from "../components/Item";

const StyledContainer = styled(Container)`
  background-color: ${brand.white};
`;

const Items = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch with params
  }, []);

  return (
    <WithNavbar>
      <StyledContainer>
        <Breadcrumb categories={["asdf", "qwerty"]} />
        {items.map(() => (
          <Item />
        ))}
      </StyledContainer>
    </WithNavbar>
  );
};

export default Items;
