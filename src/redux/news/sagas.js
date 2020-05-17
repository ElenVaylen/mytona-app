import { all, put, fork, takeLatest } from 'redux-saga/effects'
import {GET_NEWS, getNewsError, getNewsSuccess} from './actions'

function* getNews(action) {
  try {
    const { currentPage, itemsPage } = action.payload
    const apiUrl = `http://newsapi.org/v2/everything?q=dark+souls+games+fantasy&language=en&page=${currentPage}&pageSize=${itemsPage}&apiKey=3439bdf38f944b5ca672b849c3415d76`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    yield put(getNewsSuccess(data))
  } catch (e) {
    yield put(getNewsError(e))
  }
}

function* watchGetNews() {
  yield takeLatest(GET_NEWS, getNews)
}

export default function* saga() {
  yield all([
    fork(watchGetNews)
  ])
}