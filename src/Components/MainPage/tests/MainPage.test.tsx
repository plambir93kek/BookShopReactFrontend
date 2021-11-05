import { render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import MainPage from '../MainPage';

export const handlers = [
    rest.get(`https://bookshopbacknest.herokuapp.com/books?query=${''}`, (req, res, ctx) => {
        return res(ctx.json([
            {
                _id: '1',
                author: 'authorOne',
                price: '155',
                picture: 'img',
                name: 'name',
                discont: '30'
            },
            {
                _id: '1',
                author: 'authorTwo',
                price: '155',
                picture: 'img',
                name: 'name',
                discont: '30'
            }
        ]), ctx.delay(150))
    })
];

const server = setupServer(...handlers)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('test fetching and rendering books', async () => {

    render(
        <Provider store={store}>
            <MainPage />
        </Provider>
    )

    const bookOne = await screen.findByText(/authorOne/i);
    const bookTwo = await screen.findByText(/authorTwo/i);

    expect(bookOne).toBeInTheDocument();
    expect(bookTwo).toBeInTheDocument();
})