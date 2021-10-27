import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { BookContainter, Description, BookImage, BookPrice, Discont } from './StyledElements';

interface BookItemProps {
  inCart?: boolean
}

const BookItem: React.FC<BookItemProps> = ({inCart}) => {
  return (
      <BookContainter>
        <BookImage src='https://skidka-chelyabinsk.ru/images/prodacts/sourse/61968/61968341_pervaya-nauchnaya-istoriya-voynyi-1812-goda-ast.jpg'></BookImage>
        <Discont>-25%</Discont>
        <BookPrice>1 662 ₽</BookPrice>
        <Description>Первая научная история войны 1812 года. Третье издание</Description>
        <Description>Автор: E.Н. Понасенков</Description>
        <Button>{inCart? 'Delete' : 'to Cart'}</Button>
      </BookContainter>
  )
};

export default BookItem;