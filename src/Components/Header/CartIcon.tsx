import React from 'react';
import styled from 'styled-components';
import { IoCartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { showLoginForm } from '../../store/UserSlice/userSlice';
import { useHistory } from 'react-router';


const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  margin-right: 20px;
  @media(max-width: 500px){
    margin-right: 8px;
  }
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

  const dispatch = useAppDispatch();
  const {isAuth} = useAppSelector(state => state.userSlice);
  const history = useHistory();

  const useCart = () => {
     if(isAuth){
       history.push('/cart')
     } else {
       dispatch(showLoginForm(true))
     }
  };

  const books = useAppSelector(state=> state.cartSlice.books);

    return (
        <Container onClick={useCart}>
           <IoCartOutline size='35px'/>
           {isAuth? 
            <Indicator>{books?.length}</Indicator>
            :
            ''
           }
        </Container>
    )
};

export default CartIcon;