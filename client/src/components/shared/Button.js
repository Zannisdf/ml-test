import styled from "styled-components";

import { buttons } from "../../assets/styles/colors";

const Button = styled.button`
  width: 100%;
  font-size: 18px;
  padding: 12px 16px;
  border-color: transparent;
  border-radius: 4px;
  ${({ primary }) => {
    if (primary) {
      return `
        color: ${buttons.defaultTextColor}
        background-color: ${buttons.primary}
      `;
    }
  }}
`;

export default Button;
