import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import { useAppDispatch, useAppSelector } from "../../store/store"
import { setAuth, setUserId, showLoginForm } from "../../store/UserSlice/userSlice";
import { Button } from "../Button/Button"
import { ButtonContainer, IconContainer } from "./LoginButtonSyles";



const LoginButton = () => {

    const { isAuth } = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    const logOut=() => {
        dispatch(setAuth(false));
        dispatch(setUserId(''));
        localStorage.removeItem('token');
    }

    return (
        <>
            <ButtonContainer>
                {isAuth ?
                    <Button onClick={logOut}>Log-out</Button>
                    :
                    <Button onClick={() => dispatch(showLoginForm(true))}>Log-in</Button>
                }
            </ButtonContainer>
            <IconContainer>
                {isAuth ?
                    <IoLogOutOutline onClick={logOut} size='35px' />
                    :
                    <IoLogInOutline size='35px' onClick={() => dispatch(showLoginForm(true))}  />
                }
            </IconContainer>
        </>
    )
};

export default LoginButton;