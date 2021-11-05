import { Provider } from "react-redux";
import { store } from "../../../store/store";
import Login from "../../Login/Login";
import Header from "../Header";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


test('After click Log-in button shows Login from', () => {
     
    render(
      <Provider store={store}>
        <Header/>
        <Login />
      </Provider>
    );

    const loginButton = screen.getByText('Log-in');
    userEvent.click(loginButton);
    const passwordInput = screen.getByText(/password/i)
    const loginInput = screen.getByText(/login/i)
    expect(passwordInput).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
  })

