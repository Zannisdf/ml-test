import React from "react";
import styled from "styled-components";

import { brand } from "../../assets/styles/colors";

const Title = styled.h2`
  font-size: 28px;
  font-weight: normal;
  color: ${brand.black};
`;

const Body = styled.p`
  font-size: 16px;
  color: ${brand.darkGray};
  white-space: pre;
`;

const Description = ({ title, text }) => (
  <>
    <Title>{title}</Title>
    <Body>{text}</Body>
  </>
);

export default Description;
