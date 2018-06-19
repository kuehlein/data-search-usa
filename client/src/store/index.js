import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

<<<<<<< HEAD
import table from './table'
import options from './options'


const reducer = combineReducers({
  table,
  options
})
=======
import employment from './employment';


const reducer = combineReducers({
  employment,
});
>>>>>>> master

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));

const store = createStore(reducer, middleware);


<<<<<<< HEAD
export default store
export * from './table'
export * from './options'
=======
export default store;
export * from './employment';
>>>>>>> master

// server api route
export const SERVER = 'http://localhost:3001';
