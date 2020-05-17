import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HeaderLink} from './HeaderLink'
import {userLogout} from '../../redux/user/actions'
import {getLocalstorage} from '../../redux/helpers'

import './Header.scss'


export const Header = () => {
  const isAuthenticated = useSelector(state => state.user.loggedIn)
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(userLogout())
    const user = getLocalstorage('currentUser')
    if (user) {
      localStorage.removeItem('currentUser')
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap d-flex justify-content-between align-items-center">
          <HeaderLink to='/' title='Home' extraClass='header__link-left' exact={true}/>
          <nav className="menu d-flex">
            {!isAuthenticated &&
              <>
                <HeaderLink to='/login' title='Sign in'/>
                <HeaderLink to='/register' title='Sign up'/>
              </> 
            }
            {isAuthenticated &&
              <button className='header__link' onClick={() => logout()}>Logout</button>
            }
            <HeaderLink to='/news' title='News'/>
          </nav>
        </div>
      </div>
    </header>
  )
}