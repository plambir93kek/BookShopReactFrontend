import styled, { keyframes } from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  width: 300px;
  box-sizing: content-box;
  padding: 40px;
  border-radius: var(--radius);
  z-index: 500;
  background-color: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  

  @media (max-width: 767px){
    width: 250px;
  }

  @media(max-width: 325px){
    width: 160px;
    margin: auto;
  }
`;

export const FormInput = styled.input.attrs({
    readOnly: true
})`
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  margin-bottom: 10px;
  margin-top: 5px;
  height: 25px;
  font-size: 20px;
  &:focus {
    border-bottom: 1px solid var(--main-color);
  }
`;

export const FormLabel = styled.label`
   margin-top: 10px;
   opacity: 0.5;
   font-family: var(--family);
   font-weight: var(--fw-normal);
`;

const showForm = keyframes`
 0%{
    opacity:0;
 }
 100% {
  opacity: 1
 }
`;

const hideForm = keyframes`
 0%{
   opacity: 1
 }
 100% {
  opacity:0;
 }
`;

export const BehindForm = styled.div`
width: 100%;
height: 100%;
top:0;
background-color: rgba(151, 143, 143, 0.35);
position: fixed;
&.enter-active {
  animation: ${showForm} 0.5s forwards;
};
&.exit-active {
  animation: ${hideForm} 0.5s forwards;
};
`



