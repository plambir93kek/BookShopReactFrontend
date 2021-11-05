import styled from "styled-components";
import React from 'react';
import { FormInput, FormLabel } from "./styledElements";


const Containter = styled.div`
  display: flex;
  flex-direction: column;
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