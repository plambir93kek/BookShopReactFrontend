import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    _id: '',
    loginForm: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action:PayloadAction<boolean>){
           state.isAuth = action.payload;
        },
        setUserId(state, action:PayloadAction<string>){
            state._id = action.payload
        },
        showLoginForm(state, action:PayloadAction<boolean>){
            state.loginForm = action.payload;
        }
    }

});

export const {setAuth, setUserId, showLoginForm} = userSlice.actions;
export default userSlice.reducer;