import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { brand } from "../assets/styles/colors";

import { Container, Row, Col } from "styled-bootstrap-grid";
import WithNavbar from "./layouts/WithNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Item from "../components/Item";

const Main = styled.div`
  background-color: ${brand.white};
  border-radius: 4px;
`;

const Items = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: "MLA617433612",
        title: "Transformador Electronico 220/110v 2000w Carga Electronissi",
        price: {
          currency: "$",
          amount: 650,
          decimals: 2
        },
        picture:
          "http://mla-s1-p.mlstatic.com/680214-MLA31044900159_062019-I.jpg",
        condition: "new",
        free_shipping: true
      },
      {
        id: "MLA6174336123",
        title: "Transformador Electronico 220/110v 2000w Carga Electronissi",
        price: {
          currency: "$",
          amount: 650,
          decimals: 2
        },
        picture:
          "http://mla-s1-p.mlstatic.com/680214-MLA31044900159_062019-I.jpg",
        condition: "new",
        free_shipping: true
      }
    ]);
  }, []);

  return (
    <WithNavbar>
      <Container>
        <Row>
          <Col col={10} offset={1}>
            <Breadcrumb categories={["asdf", "qwerty"]} />
            <Main>
              {items.map(item => (
                <Item key={item.id} details={item} />
              ))}
            </Main>
          </Col>
        </Row>
      </Container>
    </WithNavbar>
  );
};

export default Items;
