export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
});

export const pageUp = page => ({
  type: 'PAGE_UP',
  page
});

export const pageDown = page => ({
  type: 'PAGE_DOWN',
  page
});

export const addToWatchList = toWatch => ({
  type: 'ADD_FAVORITE',
  toWatch
})
