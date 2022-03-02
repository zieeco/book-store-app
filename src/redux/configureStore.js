import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import bookReducer from './books/books';

const reducer = combineReducers({
  bookReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
