import React, { useEffect } from 'react'
import {NotificationWrap} from "./NotificationWrap";
import {Route, Routes} from "react-router-dom";
import { AuthPage, CartPage, FavoritePage, HomePage, ProfilePage } from '../pages'
import { useAppDispatch } from '../redux/hooks'
import { getMe } from '../redux/features/auth/authSlice'


function App() {
const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])
  return (
      <>
          <Routes>
              <Route path={'*'} element={<HomePage data-testid="home-page"/>}/>
              <Route path={'/profile'} element={<ProfilePage data-testid="profile-page"/>}/>
              <Route path={'/auth'} element={<AuthPage data-testid="auth-pag"/>}/>
              <Route path={'/fav'} element={<FavoritePage data-testid="favorite-page"/>}/>
              <Route path={'/cart'} element={<CartPage data-testid="cart-page"/>}/>
          </Routes>
          <NotificationWrap data-testid="notification-wrap"/>
      </>

  );
}

export default App;
