import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import { useRefreshAuthMutation } from './store/UserSlice/authAPI';
import { useAppDispatch, useAppSelector } from './store/store';
import { setAuth, setUserId } from './store/UserSlice/userSlice';
import Login from './Components/Login/Login';
import { useGetCartQuery } from './store/CartSlice/cartAPi';
import NotFoundPage from './Components/NotFound/NotFoundPage';



function App() {

  const userId = useAppSelector(state => state.userSlice._id);
  useGetCartQuery(userId)
  const dispatch = useAppDispatch();
  const [refreshAuth] = useRefreshAuthMutation();
  const token = localStorage.getItem('token');

  const refresh = async () => {
    if (token) {
      try {
        const { _id } = await refreshAuth({ token }).unwrap();
        dispatch(setAuth(true));
        dispatch(setUserId(_id));
      } catch (e) {
        console.log(e)
      }
    }
  };

  useEffect(() => {
    refresh()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path='/cart' exact>
            <Cart />
            <Login />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
