import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { brand } from "../../assets/styles/colors";

const Container = styled.div`
  padding: 16px 0;
  font-size: 14px;
  color: ${brand.gray};
  > span {
    > a {
      margin: 0 10px;
    }
    &:first-child > a {
      margin-left: 0;
    }
  }
`;
const Category = styled.a`
  color: ${brand.gray};
  text-decoration: none;
  &:hover {
    color: ${brand.black};
  }
`;

const Breadcrumb = ({ categories = [] }) => (
  <Container>
    {categories.map((category, index) => (
      <span key={`${category}_${index}`}>
        <Category href="https://mercadolibre.com">{category}</Category>
        {index !== categories.length - 1 && ">"}
      </span>
    ))}
  </Container>
);

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Breadcrumb;
