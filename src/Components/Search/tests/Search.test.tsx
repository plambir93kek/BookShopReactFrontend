import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import Search from '../Search';

test('presence of input field in Serach' ,() => {
   render(
       <Provider store={store}>
           <Search />
       </Provider>
   )

   const inptutField = screen.getByRole('textbox');
   userEvent.type(inptutField, 'hello');
   expect(inptutField).toHaveValue('hello')
})