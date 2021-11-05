import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface resAuth {
  _id: string;
  token: string;
}
interface reqAuth {
  login: string;
  password: string
}

interface resRefresh{
  _id: string;
}

interface reqRefresh{
  token: string;
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `https://bookshopbacknest.herokuapp.com/`}),
    reducerPath: 'authApi',
    endpoints: (builder) => ({
      getToken: builder.mutation<resAuth, reqAuth>({
        query: ({login, password}) => ({
          url: 'login',
          method: 'POST',
          body: {login, password},
        }),
      }),
      refreshAuth: builder.mutation<resRefresh, reqRefresh>({
        query: (token) => ({
          url: 'login/refresh',
          method: 'POST',
          body: {token}
        }),
      }),
    }),
  })

  export const { useGetTokenMutation, useRefreshAuthMutation } = authApi;