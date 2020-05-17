import { actionGenerator } from '../helpers'

export const GET_NEWS = 'GET_NEWS'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR'

const getNews = (data) => actionGenerator(GET_NEWS, data)
const getNewsSuccess = (data) => actionGenerator(GET_NEWS_SUCCESS, data)
const getNewsError = (data) => actionGenerator(GET_NEWS_ERROR, data)

export {
  getNews,
  getNewsSuccess,
  getNewsError
}