import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import Search from "../Search/Search";
import CartIcon from "./CartIcon";
import LoginButton from "./LoginButton";

const HeaderElment = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  cursor: pointer;
  @media(max-width: 550px){
    justify-content: center;
  };
  @media(max-width: 275px){
     flex-direction: column;
     align-self: center;
     width: 270px;
     justify-content: center;
  }

`;

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  @media(max-width: 285px){
    padding: 0px;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  margin: 0.5rem;
  @media (max-width: 870px){
    display: none;
  }
`;

const Header = () => {
  const history = useHistory();
  return (
    <HeaderElment>
      <Container>
        <Title onClick={()=>history.push('/')}><span style={{ color: 'var(--main-color)' }}>Book</span> Shop</Title>
        <Search />
      </Container>
      <Container>
        <LoginButton />
        <CartIcon />
      </Container>
    </HeaderElment>
  )
};

export default Header;