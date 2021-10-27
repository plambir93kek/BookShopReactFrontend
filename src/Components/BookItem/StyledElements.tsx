import styled from 'styled-components';

export const BookContainter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;
  width: 280px;
  padding: 10px;
  border: 2px solid transparent;

   &:hover{
    border: 2px solid var(--main-color);
    border-radius: var(--radius);
   }
  
`;

export const BookImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin:auto;
`;

export const Discont = styled.div`
   background-color: var(--main-color);
   border-radius: var(--radius);
   font-family: var(--family);
   width: 50px;
   text-align: center;
   padding: 2px;
   position: absolute;
   top: 10%;
`;

export const BookPrice = styled.p`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-family: var(--family);
  font-weight: var(--fw-normal);
  margin: 5px 0;
  padding: 2px;
`;