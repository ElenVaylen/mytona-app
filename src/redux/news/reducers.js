import {GET_NEWS, GET_NEWS_ERROR, GET_NEWS_SUCCESS} from './actions'
import {getLocalstorage} from '../helpers'

const localstorage = getLocalstorage('news') ? getLocalstorage('news') : []

const initialState = {
  news: localstorage || {},
  loading: false,
  error: null,
}

const handlers = {
  [GET_NEWS]: (state) => ({
    ...state,
    loading: true,
    error: null
  }),
  [GET_NEWS_SUCCESS]: (state, data) => ({
    ...state,
    loading: false,
    news: data
  }),
  [GET_NEWS_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data
  }),
  DEFAULT: state => state
}

export function newsReducer (state = initialState, action = {}) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
} 