import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useGetTokenMutation } from '../../store/UserSlice/authAPI';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setAuth, setUserId, showLoginForm } from '../../store/UserSlice/userSlice';
import { Button } from '../Button/Button';
import { InputContainter } from './InputContainer';
import { BehindForm, LoginForm } from './styledElements';
import { CSSTransition } from 'react-transition-group';



const Login: React.FC = () => {

  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [message, setMessage] = useState('Please log in to use the shopping cart');
  const dispatch = useAppDispatch();
  const showForm = useAppSelector(state => state.userSlice.loginForm);

  const [getToken] = useGetTokenMutation();
  const logIn = async () => {
    try {
      const { _id, token } = await getToken({ login: login, password: password }).unwrap();
      dispatch(setAuth(true));
      dispatch(setUserId(_id));
      localStorage.setItem('token', token)
      dispatch(showLoginForm(false))
      setTimeout(() => {
        setMessage('Please log in to use the shopping cart')
      }, 1000)
    } catch (e) {
      setMessage('Incorrect login or password')
    }
  };

  return (
    <>
      <CSSTransition timeout={500} in={showForm} mountOnEnter unmountOnExit>
        <BehindForm >
          <LoginForm>
            <IoCloseOutline onClick={() => dispatch(showLoginForm(false))} size='25px' style={{ position: 'absolute', top: '2%', right: '2%', opacity: '0.6' }} />
            <p style={{ textAlign: 'center', marginTop: '0' }}>{message}</p>
            <InputContainter type='text' onChange={setLogin}  />
            <InputContainter type='password' onChange={setPassword}  />
            <Button onClick={logIn} marginTop={20}>Log-in</Button>
          </LoginForm>
        </BehindForm>
      </CSSTransition>
    </>
  )
};

export default Login;