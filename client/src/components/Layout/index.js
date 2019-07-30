import React from "react";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "./Breadcrumb";
import ContentWrapper from "./ContentWrapper";

const Layout = ({ children, categories }) => (
  <Container>
    <Breadcrumb categories={categories} />
    <Row>
      <Col col={10} offset={1}>
        <ContentWrapper>{children}</ContentWrapper>
      </Col>
    </Row>
  </Container>
);

export default Layout;
