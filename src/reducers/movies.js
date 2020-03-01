export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies.results;
    default:
      return state;
  }
}