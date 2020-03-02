import * as actions from './index';

describe('actions', () => {
  it('should have a type of ADD_MOVIES', () => {
    const movies = [{title: 'Movie 1'},{title: 'Movie 2'}]

    const expectedAction = {
      type: 'ADD_MOVIES',
      movies
    }

    const result = actions.addMovies(movies)
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of PAGE_UP', () => {
    const page = 1;

    const expectedAction = {
      type: 'PAGE_UP',
      page
    }

    const result = actions.pageUp(page)
    expect(result).toEqual(expectedAction)
  })
  it('should have a type of PAGE_DOWN', () => {
    const page = 1;

    const expectedAction = {
      type: 'PAGE_DOWN',
      page
    }

    const result = actions.pageDown(page)
    expect(result).toEqual(expectedAction)
  })
  it('should have a type of ADD_FAVORITE', () => {
    const toWatch = {title: 'Movie 1'};

    const expectedAction = {
      type: 'ADD_FAVORITE', 
      toWatch
    }

    const result = actions.addToWatchList(toWatch)
    expect(result).toEqual(expectedAction)
  })
})