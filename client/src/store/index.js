import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import table from './table'
import options from './options'


const reducer = combineReducers({
  table,
  options
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)


export default store
export * from './table'
export * from './options'

// server api route
export const SERVER = 'http://localhost:3001'
