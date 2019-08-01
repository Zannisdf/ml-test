import React from "react";
import styled from "styled-components";

import Layout from "../Layout";

const Wrapper = styled.div`
  margin-top: 32px;
`;
const ContentWrapper = styled.div`
  padding: 32px;
`;

const notice = "Ups! No encontramos lo que estabas buscando.";

const NotFound = () => (
  <Wrapper>
    <Layout breadcrumb={false}>
      <ContentWrapper>{notice}</ContentWrapper>
    </Layout>
  </Wrapper>
);

export default NotFound;
