import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import App from '../../../App';
import { store } from '../../../store/store';
import { setAuth } from '../../../store/UserSlice/userSlice';
import Cart from '../Cart';

export const handlers = [
    rest.get(`https://bookshopbacknest.herokuapp.com/cart?user=${''}`, (req, res, ctx) => {
        return res(ctx.json({
            userId: '',
            books: [
                {
                    _id: '1',
                    author: 'authorOne',
                    price: '155',
                    picture: 'img',
                    name: 'name',
                    discont: '30'
                }
            ]
        }), ctx.delay(150))
    })
];

const server = setupServer(...handlers)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetch and render Cart', async () => {
    store.dispatch(setAuth(true));

    render(
        <Provider store={store}>
            <Cart />
            <App />
        </Provider>
    )

    const bookOne = await screen.findByText(/authorOne/i);
   
    expect(bookOne).toBeInTheDocument();
    
});



