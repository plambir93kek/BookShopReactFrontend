import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../Types/CartType";
import { cartApi } from "./cartAPi";

const initialState: Cart = {
   userId: '',
   books: []
}

 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:  {
        removeBook: (state, action)=>{
            state.books = state.books.filter(book =>
                book._id !== action.payload
                )
        },
        addBookToCart: (state, action) =>{
          if(!state.books?.find(book =>
              book._id === action.payload._id
            )){
              state.books?.push(action.payload)
            }
        }
    },
    extraReducers: (builder) => {
      builder
        .addMatcher(
          cartApi.endpoints.getCart.matchFulfilled,
          (state, action:PayloadAction<Cart>) => {
            state.books= action.payload?.books;
            state.userId=action.payload?.userId;
          }
        )
    },
  });

  export default cartSlice.reducer;
  export const {removeBook, addBookToCart} = cartSlice.actions