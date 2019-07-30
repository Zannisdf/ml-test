import React from "react";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "../Breadcrumb";
import ResultsContainer from "../ResultsContainer";
import Item from "../Item";

const View = ({ items, categories }) => (
  <Container>
    <Row>
      <Col col={10} offset={1}>
        <Breadcrumb categories={categories} />
        <ResultsContainer>
          {items.map(item => (
            <Item key={item.id} details={item} />
          ))}
        </ResultsContainer>
      </Col>
    </Row>
  </Container>
);

export default View;
