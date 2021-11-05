import React, { useEffect } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useAppSelector } from '../../store/store';
import BookItem from '../BookItem/BookItem';
import CartOrder from './CartOrder';
import { CartContainer, CartWrapper } from './styledElems';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  padding: 10px;
  @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
  }
`;

const Cart = () => {
    
    const { isAuth } = useAppSelector(state => state.userSlice);
    
    const books = useAppSelector(state=> state.cartSlice.books);
    const history = useHistory();

    useEffect(()=>{
        history?.push('/cart')
     }, [isAuth])
    
    return (
        <>
        <div onClick={()=>history.push('/')} style={{display: 'flex', alignItems: 'center', cursor:'pointer'}}>
           <IoArrowBackCircleOutline size='30px' style={{margin:'10px'}} />
           <p style={{fontFamily:'var(--family)', fontWeight:'normal'}}>Back</p>
        </div>
            {isAuth ?
                <Container>
                    <CartContainer>
                        <CartWrapper>
                            {books?.map(book =>
                                <BookItem inCart book={book} key={book._id} />
                            )}
                        </CartWrapper>
                    </CartContainer>
                    <CartOrder />
                </Container>
                :
                <h2 style={{textAlign:'center'}}>Please log in to use the shopping cart...</h2>
            }

        </>
    )
};

export default Cart;


