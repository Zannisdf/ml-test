import React from "react";
import styled from "styled-components";

import { brand } from "../../assets/styles/colors";
import breakpoints from "../../assets/styles/breakpoints";
import Button from "../shared/Button";

const Wrapper = styled.div`
  display: block;
  > img {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    display: flex;
    > img {
      flex-basis: 680px;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
`;
const Details = styled.div`
  width: auto;
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
  item: {
    title,
    price: { currency, amount },
    picture,
    condition,
    sold_quantity
  }
}) => {
  const sold = `${sold_quantity} ${
    sold_quantity === 1 ? "vendido" : "vendidos"
  }`;
  return (
    <Wrapper>
      <img src={picture} alt="Producto" />
      <Details>
        <Status>
          {condition} - {sold}
        </Status>
        <Title>{title}</Title>
        <Price>{`${currency} ${amount}`}</Price>
        <Button primary>Comprar</Button>
      </Details>
    </Wrapper>
  );
};
export default Info;
