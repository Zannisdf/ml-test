import React from "react";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "./Breadcrumb";
import ContentWrapper from "./ContentWrapper";

const Layout = ({ children, categories }) => (
  <Container>
    <Row>
      <Col col={10} offset={1}>
        <Breadcrumb categories={categories} />
        <ContentWrapper>{children}</ContentWrapper>
      </Col>
    </Row>
  </Container>
);

export default Layout;
