import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "../Breadcrumb";
import ResultsContainer from "../ResultsContainer";

const ResultsWithPadding = styled(ResultsContainer)`
  padding: 32px;
`;

const View = () => (
  <Container>
    <Row>
      <Col col={10} offset={1}>
        <Breadcrumb />
        <ResultsWithPadding>
          <Info />
          <Description />
        </ResultsWithPadding>
      </Col>
    </Row>
  </Container>
);

export default View;
