import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { addBookToCart } from '../../../store/CartSlice/cartSlice';
import { store } from '../../../store/store';
import { setAuth } from '../../../store/UserSlice/userSlice';
import CartIcon from '../CartIcon';


test('renders the indicator of cart`s items quantity', () => {
  store.dispatch(setAuth(true));
  store.dispatch(addBookToCart({
    _id: '1'
  }));
  store.dispatch(addBookToCart({
    _id: '2'
  }));

  render(
    <Provider store={store}>
      <CartIcon />
    </Provider>
  );

  const indicator = screen.getByText('2');
  expect(indicator).toBeInTheDocument();
});
