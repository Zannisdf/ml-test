import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import useFormattedPrice from "../../utils/useFormattedPrice";

import freeShippingLogo from "../../assets/images/ic_shipping.png";
import { Link } from "react-router-dom";
import { brand } from "../../assets/styles/colors";
import breakpoints from "../../assets/styles/breakpoints";

const Container = styled.div`
  display: flex;
  margin: 0 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${brand.lightGray};
  &:last-child {
    border-bottom: none;
  }
`;
const Img = styled.img`
  border-radius: 4px;
  margin-right: 16px;
  display: block;
  width: 108px;
  height: 108px;
  @media screen and (min-width: ${breakpoints.md}) {
    height: 180px;
    width: 180px;
  }
`;
const Main = styled.div`
  color: ${brand.black};
  width: 100%;
`;
const PriceContainer = styled.div`
  padding: 16px 0;
  display: block;
  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;
const Price = styled.div`
  font-size: 24px;
`;
const Title = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: ${brand.black};
  display: block;
  max-width: 80%;
`;
const Condition = styled.div`
  width: 20%;
  font-size: 12px;
  color: ${brand.gray};
`;

const Item = ({
  details: { id, title, price, picture, condition, free_shipping }
}) => {
  const BASE_URL = "/items/";
  const itemDetailPath = BASE_URL + id;
  const formattedPrice = useFormattedPrice(price);
  return (
    <Container>
      <Link to={itemDetailPath}>
        <Img src={picture} />
      </Link>
      <Main>
        <PriceContainer>
          <Price>
            {formattedPrice}{" "}
            {free_shipping && <img src={freeShippingLogo} alt="Envío gratis" />}
          </Price>
          <Condition>{condition}</Condition>
        </PriceContainer>
        <Title to={itemDetailPath}>{title}</Title>
      </Main>
    </Container>
  );
};

Item.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      dcimals: PropTypes.number
    }),
    picture: PropTypes.string,
    condition: PropTypes.string,
    free_shipping: PropTypes.bool
  }).isRequired
};

export default Item;
