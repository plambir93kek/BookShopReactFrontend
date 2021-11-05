import styled from 'styled-components';

interface ButtonProps {
    height?: number;
    color?: string;
    marginTop?: number;
}


export const Button = styled.button<ButtonProps>`
   border: none;
   background-color: ${props => props.color? props.color: 'var(--main-color)'};
   padding: 7px;
   display:flex;
   justify-content: center;
   align-items: center;
   font-family: var(--family);
   font-size: 20px;
   border-radius: var(--radius);
   height: ${props => props.height}px;
   margin-top: ${props => props.marginTop}px;
   &:active{
       opacity: 0.5;
   }
`;