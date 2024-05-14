import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../styles/Container";
// import styled from "styled-components";
import logoHeader from "../images/logo.svg";
import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
  return (
    <Container>
      <HeaderFixed>
        <MainHeader>
          <NavLink to="/" className="nav-link">
            <img src={logoHeader} alt="logo" />
          </NavLink>
          <Nav />
        </MainHeader>
      </HeaderFixed>
    </Container>
  );
}

const HeaderFixed = styled.div`
   {
    position: fixed;
    top: 24px;
    left: 0px;
    right: 0px;
    max-width: 100%;
    padding: 0 24px;
    z-index: 999;
  }
`;
const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(11, 11, 11, 0.3);
  height: 60px;

  .nav-link {
    img {
      height: 40px;
      width: 106px;
      border-radius: 12px 0px;
    }
  }
`;
