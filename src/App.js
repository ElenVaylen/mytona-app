import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import {Header} from './components/Header/Header'
import {useSelector} from 'react-redux'
import {Alert} from './components/Alert/Alert'

export const App = () => {
  const routes = useRoutes(false)
  const userSuccess = useSelector(state => state.user.success)

  let success = userSuccess

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <div className="content">
          {success &&
            <Alert text={success}/>
          }
          {routes}
        </div>
      </div>
    </BrowserRouter>
  )
}
