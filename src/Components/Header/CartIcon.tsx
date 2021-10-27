import React from 'react';
import styled from 'styled-components';
import { IoCartOutline } from 'react-icons/io5'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  margin-right: 20px;
`;

const Indicator = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  position:absolute;
  border-radius: 50%;
  width:15px;
  height: 15px;
  background-color: var(--main-color);
  font-size: 10px;
  font-family: var(--family);
  top: 5%;
  right: 0;
`;

const CartIcon = () => {
   
    return (
        <Container>
           <IoCartOutline size='35px'/>
           <Indicator>1</Indicator>
        </Container>
    )
};

export default CartIcon;