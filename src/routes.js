import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from './pages/MainPage/MainPage'
import {Login} from './pages/Login/Login'
import {Register} from './pages/Register/Register'
import {News} from './pages/News/News'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact>
        <MainPage/>
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/news'>
        <News />
      </Route>
      <Redirect to='/'/>
    </Switch>
  )
}