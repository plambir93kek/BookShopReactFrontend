import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cart } from '../../Types/CartType';


export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bookshopbacknest.herokuapp.com/' }),
    endpoints: (builder) => ({
      addToCart: builder.mutation({
        query: ({userId, book}) => ({
            url: 'cart',
            method: 'POST',
            body: {userId, book}
        }),
      }),
      deleteFromCart: builder.mutation({
        query: ({userId, book}) => ({
            url: 'cart',
            method: 'DELETE',
            body: {userId, book}
        }),
      }),
      getCart: builder.query<Cart, string>({
        query: (userId) => ({
          url: `cart?user=${userId}`
        }),
      }),
    }),
  })

  export const {useAddToCartMutation, useDeleteFromCartMutation, useGetCartQuery} = cartApi;