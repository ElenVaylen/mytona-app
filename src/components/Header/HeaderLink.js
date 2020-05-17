import React from 'react'
import {NavLink} from 'react-router-dom'

export const HeaderLink = ({title = '', to = '', extraClass = '', exact = false}) => {
  return (
    <NavLink to={to} className={`header__link ${extraClass}`} activeClassName="active" exact={exact}>{title}</NavLink>
  )
}