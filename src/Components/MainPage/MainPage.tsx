import React from 'react';
import styled from 'styled-components';
import { booksApi } from '../../store/BooksSlice/booksAPI';
import { useAppSelector } from '../../store/store';
import BookItem from '../BookItem/BookItem';
import Login from '../Login/Login';
import { WrapperMain } from './styledElems';



const Container = styled.div`
   display: flex;
   padding: 20px;
   justify-content: center;
   @media(max-width: 300px){
       width: 270px;
       margin: auto
   }
`;

const MainPage = () => {

    const searchTerm = useAppSelector(state => state.searchReducer.searchTerm);
    const { data: books, error, isLoading } = booksApi.useGetBooksQuery(searchTerm);


    return (
      <>
      {error &&
      <h1 style={{textAlign:'center'}}>Sorry, some problems with server</h1>
      }
      {isLoading && 
       <h1 style={{textAlign:'center'}}>...Loading data, please wait</h1>
      }
        <Container>
            <WrapperMain>
                {books?.map(book =>
                    <BookItem book={book} key={book._id} />
                )}
            </WrapperMain>  
        </Container>
        <Login  />
        </>
    )
};

export default MainPage;