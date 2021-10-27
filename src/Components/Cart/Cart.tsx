import React from 'react';
import styled from 'styled-components';
import BookItem from '../BookItem/BookItem';
import CartOrder from './CartOrder';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 10px;
  @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
  }
`;

const Cart = () => {
    return (
        <Container>
            <BookItem inCart />
            <CartOrder />
        </Container>
    )
};

export default Cart;