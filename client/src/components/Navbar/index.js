import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "styled-bootstrap-grid";

import logo from "../../assets/images/Logo_ML@2x.png";
import glassIcon from "../../assets/images/ic_Search.png";
import { brand } from "../../assets/styles/colors";

const fontSize = "18px";

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
  font-size: ${fontSize};
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
  height: ${fontSize};
  line-height: 100%;
`;

const Navbar = ({ history }) => {
  const BASE_URL = "/items";
  const name = "search";
  const placeholder = "Nunca dejes de buscar";
  const [value, setValue] = useState("");

  const handleChange = e => {
    e.persist();
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = encodeURI(value);
    const params = `${name}=${query}`;
    const redirectionPath = `${BASE_URL}?${params}`;
    history.push(redirectionPath);
  };

  return (
    <Nav>
      <Container>
        <form onSubmit={e => handleSubmit(e)}>
          <Row>
            <FlexCol col={1} offset={1}>
              <Logo src={logo} alt="" />
            </FlexCol>
            <FlexCol col={9}>
              <Input
                type="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={e => handleChange(e)}
              />
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

export default withRouter(Navbar);
