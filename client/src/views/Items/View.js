import React from "react";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "../../components/Breadcrumb";
import ResultsContainer from "../../components/ResultsContainer";
import Item from "../../components/Item";

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
