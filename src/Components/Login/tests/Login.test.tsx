import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { showLoginForm } from '../../../store/UserSlice/userSlice';
import Login from '../Login';

test('input fields and button to be in component', () => {
   
    store.dispatch(showLoginForm(true))

    render(
        <Provider store={store}>
          <Login />
        </Provider>
      );
    
  const inputField = screen.getByRole('textbox')
  userEvent.type(inputField, 'one');
  expect(inputField).toHaveValue('one');

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
})