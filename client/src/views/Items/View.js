import React from "react";
import styled from "styled-components";

import { brand } from "../../assets/styles/colors";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "../../components/Breadcrumb";
import Item from "../../components/Item";

const Main = styled.div`
  background-color: ${brand.white};
  border-radius: 4px;
`;

const View = ({ items }) => (
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
);

export default View;
