import styled from "styled-components";

export const CartWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 @media(max-width: 624px){
  grid-template-columns: 1fr;
 }
 
`;

export const CartContainer = styled.div`
  margin: auto;
`;