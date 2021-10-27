import React from "react";
import styled from "styled-components";
import { Description } from "../BookItem/StyledElements";
import { Button } from "../Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eff3f6;
  width: 500px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  box-sizing: content-box;
  padding: 10px;
  @media (max-width:850px){
    width: 90%
  }
  @media (max-width:500px){
    width:300px;
  }
`;
 
const Column = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartOrder = () => {
   return (
       <Container>
           <Button color='#10ad44'>Buy Now</Button>
           <Description>The Cart is a temporary place to store a list of your items and reflects each item's most recent price.</Description>
           <p style={{fontFamily:'var(--family)', margin:'5px 0'}}>Your Cart:</p>
           <Column>
             <p style={{fontFamily:'var(--family)'}}>Quantity of items</p>
             <p style={{fontFamily:'var(--family)'}}>2</p>
           </Column>
           <Column>
             <p style={{fontFamily:'var(--family)'}}>Total</p>
             <p style={{fontFamily:'var(--family)'}}>200 Р</p>
           </Column>
       </Container>
   )
};

export default CartOrder;