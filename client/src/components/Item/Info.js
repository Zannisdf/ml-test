import React from "react";
import styled from "styled-components";

import { brand } from "../../assets/styles/colors";
import Button from "../shared/Button";

const Wrapper = styled.div`
  display: flex;
  > img {
    display: block;
    width: 680px;
    height: auto;
  }
`;
const Details = styled.div`
  width: calc(100% - 680px);
  color: ${brand.black};
`;
const Status = styled.span`
  font-size: 14px;
  color: ${brand.darkGray};
`;
const Title = styled.h1`
  font-size: 24px;
  margin: 16px 0 0;
`;
const Price = styled.span`
  font-size: 46px;
  display: block;
  margin: 32px 0;
`;

const Info = ({
  item: { title, price, picture, condition, sold_quantity }
}) => (
  <Wrapper>
    <img src={picture} alt="Producto" />
    <Details>
      <Status>
        {condition} - {sold_quantity}
      </Status>
      <Title>{title}</Title>
      <Price>{`${price.currency} ${price.amount}`}</Price>
      <Button primary>Comprar</Button>
    </Details>
  </Wrapper>
);

export default Info;
