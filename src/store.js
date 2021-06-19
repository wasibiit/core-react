import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import {reducers} from './redux/reducers/index';

const middleware = applyMiddleware(promise, thunk, logger)
const reducer = combineReducers(reducers)

export const store = createStore(reducer, middleware)