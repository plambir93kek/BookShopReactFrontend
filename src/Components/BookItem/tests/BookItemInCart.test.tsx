import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import BookItem from '../BookItem';

const book = {
    _id: '1',
    author: 'author',
    price: '155',
    picture: 'img',
    name: 'name',
    discont: '30'
}
test('test rendering elements of Book item in Cart', () => {

    render(
        <Provider store={store}>
            <BookItem inCart book={book} />
        </Provider>
    )

    const author=screen.getByText(/author/i);
    expect(author).toBeInTheDocument();
    
    const deleteButton = screen.getByText(/remove/i);
    expect(deleteButton).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})