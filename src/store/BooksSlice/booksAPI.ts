import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../Types/BookType';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bookshopbacknest.herokuapp.com/' }),
    endpoints: (builder) => ({
      getBooks: builder.query<Book[], string>({
        query: (name) => ({
            url: `books?query=${name}`
        }),
      }),
    }),
  });

