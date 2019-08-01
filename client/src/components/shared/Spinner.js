import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 55px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 6px solid #e8e8e8;
  border-top: 6px solid #ccc;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FullscreenSpinner = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

export default Spinner;
