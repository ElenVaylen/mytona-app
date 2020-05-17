import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS
} from './actions'
import {getLocalstorage} from '../helpers'

const localstorage = getLocalstorage('currentUser')

const initialState = {
  loggedIn: !!localstorage,
  loginError: null,
  user: localstorage ? { email: localstorage.email, name: localstorage.name } : null,
}

const handlers = {
  [USER_LOGIN]: (state, data) => ({
    ...state,
    loggedIn: true,
    loginError: null,
    user: data
  }),
  [USER_LOGIN_ERROR]: (state, { error }) => ({
    ...state,
    loggedIn: false,
    loginError: error,
    user: null
  }),
  [USER_REGISTER_SUCCESS]: (state, { success }) => ({
    ...state,
    success: success
  }),
  [USER_LOGIN_SUCCESS]: (state, { success }) => ({
    ...state,
    success: success
  }),
  [USER_LOGOUT]: () => {
    return {
      loggedIn: false,
      loginError: null,
      user: null
    }
  },
  DEFAULT: state => state
}

export function userReducer (state = initialState, action = {}) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}