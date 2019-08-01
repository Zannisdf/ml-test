import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Breadcrumb from "./Breadcrumb";
import ContentWrapper from "./ContentWrapper";

const Layout = ({ title, children, categories, breadcrumb = true }) => (
  <>
    <Helmet>
      <title>{`${title} en Mercado Libre`}</title>
    </Helmet>
    <Container>
      <Row>
        <Col col={12} lg={10} lgOffset={1}>
          {breadcrumb && <Breadcrumb categories={categories} />}
          <ContentWrapper>{children}</ContentWrapper>
        </Col>
      </Row>
    </Container>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  categories: PropTypes.array,
  breadcrumb: PropTypes.bool
};

export default Layout;
