import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { brand } from "../../assets/styles/colors";

const Container = styled.div`
  padding: 16px 0;
  font-size: 14px;
`;
const Category = styled.a`
  position: relative;
  margin-right: 20px;
  color: ${brand.gray};
  text-decoration: none;

  &:before {
    content: ">";
    position: absolute;
    right: -15px;
  }
  &:last-child {
    font-weight: bold;

    &:before {
      content: "";
    }
  }
`;

const Breadcrumb = ({ categories = [] }) => (
  <Container>
    {categories.map((category, index) => (
      <Category key={`${category}_${index}`} href="https://mercadolibre.com">
        {category}
      </Category>
    ))}
  </Container>
);

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Breadcrumb;
