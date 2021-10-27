import styled from "styled-components";
import React from 'react';
import { IoFlashOffOutline } from "react-icons/io5";


const Containter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input.attrs({
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

const FormLabel = styled.label`
   margin-top: 10px;
   opacity: 0.5;
   font-family: var(--family);
   font-weight: var(--fw-normal);
`;

interface InputContainterProps {
    type: string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export const InputContainter: React.FC<InputContainterProps> = ({ type, onChange }) => {
    return (
        <Containter>
            <FormLabel>{type === 'password' ? 'Password: pas123' : 'Login: user123'}</FormLabel>
            <FormInput
                onFocus={(e) => e.target.removeAttribute('readOnly')}
                type={type}
                onChange={(e) => onChange(e.target.value)}
            />
        </Containter>
    )
}