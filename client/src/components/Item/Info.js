import React from "react";
import styled from "styled-components";

import { brand } from "../../assets/styles/colors";
import breakpoints from "../../assets/styles/breakpoints";
import Button from "../shared/Button";
import useFormattedPrice from "../../utils/useFormattedPrice";

const Wrapper = styled.div`
  display: block;
  > img {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    display: flex;
  }
`;
const Details = styled.div`
  width: 30%;
  margin-left: 16px;
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
}) => {
  const sold = `${sold_quantity} ${
    sold_quantity === 1 ? "vendido" : "vendidos"
  }`;
  const formattedPrice = useFormattedPrice(price);
  return (
    <Wrapper>
      <img src={picture} alt="Producto" />
      <Details>
        <Status>
          {condition} - {sold}
        </Status>
        <Title>{title}</Title>
        <Price>{formattedPrice}</Price>
        <Button primary>Comprar</Button>
      </Details>
    </Wrapper>
  );
};
export default Info;
