import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {newsReducer} from './news/reducers'
import {userReducer} from './user/reducers'
import saga from './news/sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(combineReducers({news: newsReducer, user: userReducer}), applyMiddleware(sagaMiddleware) )

sagaMiddleware.run(saga)