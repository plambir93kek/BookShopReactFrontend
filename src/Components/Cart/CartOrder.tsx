import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/store";
import { Book } from "../../Types/BookType";
import { Button } from "../Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eff3f6;
  width: 500px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  box-sizing: content-box;
  padding: 10px;
  height: fit-content;
  @media (max-width:850px){
    width: 90%
  }
  @media (max-width:500px){
    width:300px;
  }
`;

const Description = styled.p`
  font-family: var(--family);
  font-weight: var(--fw-normal);
  margin: 10px 0;
  padding: 2px;
`;

 
const Column = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px;
`;

const CartOrder = () => {

  const books = useAppSelector(state=> state.cartSlice.books);
  const total = (books:Array<Book>) => {
     let result = 0
     books?.forEach(book =>
        result += Number(book.price)
      )
      return result;
  }

   return (
       <Container>
           <Button color='#10ad44'>Buy Now</Button>
           <Description>The Cart is a temporary place to store a list of your items and reflects each item's most recent price.</Description>
           <p style={{fontFamily:'var(--family)', margin:'5px 0'}}>Your Cart:</p>
           <Column>
             <p style={{fontFamily:'var(--family)'}}>Quantity of items</p>
             <p style={{fontFamily:'var(--family)'}}>{books?.length}</p>
           </Column>
           <Column>
             <p style={{fontFamily:'var(--family)'}}>Total</p>
             <p style={{fontFamily:'var(--family)'}}>{total(books)} ₽</p>
           </Column>
       </Container>
   )
};

export default CartOrder;