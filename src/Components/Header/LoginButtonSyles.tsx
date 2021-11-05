import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 25px;

@media(max-width: 1000px){
    display: none
}
`;

export const IconContainer = styled.div`
display: none;

@media(max-width: 1000px){
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
}
`;