import React from 'react';
import { useAddToCartMutation, useDeleteFromCartMutation } from '../../store/CartSlice/cartAPi';
import { addBookToCart, removeBook } from '../../store/CartSlice/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { showLoginForm } from '../../store/UserSlice/userSlice';
import { Book } from '../../Types/BookType';
import { Button } from '../Button/Button';
import { BookContainter, Description, BookImage, BookPrice, Discont } from './StyledElements';

interface BookItemProps {
  inCart?: boolean
  book?: Book;
};


const BookItem: React.FC<BookItemProps> = ({inCart, book }) => {
  
  const [addToCart ] = useAddToCartMutation()
  const userId = useAppSelector(state => state.userSlice._id);
  const isAuth = useAppSelector(state => state.userSlice.isAuth);
  const [deleteFromCart] = useDeleteFromCartMutation();
  const dispatch = useAppDispatch()

  const addBook = async() => {
    if(isAuth){
      await addToCart({userId, book})
    dispatch(addBookToCart(book))
    }else{
      dispatch(showLoginForm(true))
    }
  };

 const deleteBook = async() => {
  await deleteFromCart({userId, book})
  dispatch(removeBook(book?._id))
 }
 
  return (
      <BookContainter>
        <BookImage src={`https://bookshopbacknest.herokuapp.com/images/${book?.picture}`}></BookImage>
        <Discont>-{book?.discont}</Discont>
        <BookPrice>{book?.price} ₽</BookPrice>
        <Description>{book?.name}</Description>
        <Description>Автор: {book?.author}</Description>
        {inCart?
        <Button onClick={deleteBook}>Remove</Button>
        :
        <Button onClick={addBook}>Add to Cart</Button>
        }
      </BookContainter>
  )
};

export default BookItem;