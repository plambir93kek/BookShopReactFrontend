import React, { useState } from 'react';
import styled from 'styled-components';
import { InputContainter } from './InputContainer';

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  width: 300px;
  border:2px solid var(--main-color);
  box-sizing: content-box;
  padding: 40px;
  border-radius: var(--radius);
  z-index: 5;

  @media (max-width: 767px){
    width: 250px;
  }
`;

const Login: React.FC = () => {

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    return (
      <LoginForm>
          <p style={{marginTop: '10px'}}>Пожалуйста авторизуйстесь, чтобы пользоваться корзиной</p>
         <InputContainter type='text' onChange={setLogin} />
         <InputContainter type='password' onChange={setPassword}/>
      </LoginForm>
    )
};

export default Login;