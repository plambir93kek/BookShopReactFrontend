import React from "react";
import styled from 'styled-components';
import Search from "../Search/Search";
import CartIcon from "./CartIcon";

const HeaderElment = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const Title = styled.h1`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  margin: 0.5rem;
  @media (max-width: 814px){
    display: none;
  }
`;

const Header = () => {
    return (
        <HeaderElment>
            <Container>
                <Title><span style={{color: 'var(--main-color)'}}>Book</span> Shop</Title>
                <Search />
            </Container>
            <Container>
              <CartIcon />
            </Container>
        </HeaderElment>
    )
};

export default Header;