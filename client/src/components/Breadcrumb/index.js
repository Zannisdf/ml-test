import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "styled-bootstrap-grid";

import { brand } from "../../assets/styles/colors";

const StyledContainer = styled(Container)`
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
  <StyledContainer>
    {categories.map((category, index) => (
      <Category key={`${category}_${index}`} href="https://mercadolibre.com">
        {category}
      </Category>
    ))}
  </StyledContainer>
);

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Breadcrumb;
