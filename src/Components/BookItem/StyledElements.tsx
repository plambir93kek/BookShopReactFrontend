import styled from 'styled-components';

export const BookContainter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;
  width: 280px;
  padding: 20px 10px;
  height: fit-content;
  border: 2px solid transparent;
  margin: 2px;

   &:hover{
    border: 2px solid var(--main-color);
    border-radius: var(--radius);
   };

   @media(max-width: 300px){
     width: 210px;
   }
  
`;

export const BookImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin: 0 auto;
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
  margin-top: 20px;
`;

export const Description = styled.p`
  font-family: var(--family);
  font-weight: var(--fw-normal);
  margin: 5px 0;
  padding: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 40px;
  height: 40px;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;