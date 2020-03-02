import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { pageReducer } from './page';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  page: pageReducer
})