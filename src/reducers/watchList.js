export const watchlistReducer = (state =[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.toWatch]
    default:
      return state;
  }
}