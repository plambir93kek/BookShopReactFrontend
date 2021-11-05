import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./UserSlice/authAPI";
import { booksApi } from "./BooksSlice/booksAPI";
import { cartApi } from "./CartSlice/cartAPi";
import cartSlice  from "./CartSlice/cartSlice";
import searchReducer from "./Search/searchReducer";
import userSlice from "./UserSlice/userSlice";

const roorReducer = combineReducers({
    searchReducer,
    userSlice,
    cartSlice,
    [booksApi.reducerPath]: booksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer
});

 const createStore = () => configureStore({
    reducer: roorReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, cartApi.middleware, authApi.middleware)
});

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();