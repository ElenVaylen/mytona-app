import { actionGenerator } from '../helpers'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'


const userLogin = ({ email, name }) => actionGenerator(USER_LOGIN, { email, name })
const userLoginError = ({error}) => actionGenerator(USER_LOGIN_ERROR, {error})
const userLoginSuccess = ({success}) => actionGenerator(USER_LOGIN_SUCCESS, {success})
const userRegisterSuccess = ({success}) => actionGenerator(USER_REGISTER_SUCCESS, {success})

const userLogout = () => actionGenerator(USER_LOGOUT)

export {
  userLogin,
  userLoginError,
  userLogout,
  userRegisterSuccess,
  userLoginSuccess
}