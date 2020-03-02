import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { pageReducer } from './page';
import { watchlistReducer } from './watchList'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  page: pageReducer,
  watchlist: watchlistReducer
})