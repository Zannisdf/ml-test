import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

import logo from "../../assets/images/Logo_ML@2x.png";
import glassIcon from "../../assets/images/ic_Search.png";
import { brand } from "../../assets/styles/colors";

const Nav = styled.nav`
  width: 100%;
  background-color: ${brand.yellow};
  padding: 8px 0;
`;
const FlexCol = styled(Col)`
  display: flex;
  height: 39px;
  align-items: center;
  > form {
    height: 100%;
  }
`;
const Logo = styled.img`
  height: 34px;
  width: auto;
`;
const Input = styled.input`
  height: 100%;
  font-size: 18px;
  color: #333;
  flex-grow: 1;
  padding: 0 10px;
  border-color: transparent;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;
const Button = styled.button`
  height: 100%;
  border-color: transparent;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: ${brand.lightGray};
  padding: 0 12px;
`;
const SearchIcon = styled.img`
  height: 18px;
  line-height: 100%;
`;

const Navbar = () => {
  const placeholder = "Nunca dejes de buscar";
  return (
    <Nav>
      <Container>
        <form>
          <Row>
            <FlexCol col={1} offset={1}>
              <Logo src={logo} alt="" />
            </FlexCol>
            <FlexCol col={9}>
              <Input type="text" placeholder={placeholder} />
              <Button type="submit">
                <SearchIcon src={glassIcon} alt="Search" />
              </Button>
            </FlexCol>
          </Row>
        </form>
      </Container>
    </Nav>
  );
};

export default Navbar;
