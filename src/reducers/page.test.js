import { pageReducer } from './page';

describe('pageReducer', () => {
  it('should return initial state if no state is provided', () => {
    const expected = 1;
    const result = pageReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state if the type is PAGE_UP', () => {
    const expected = 2;
    const page = 1
    const mockAction = {
      type: 'PAGE_UP',
      page
    }
    const mockState = 1

    const result = pageReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it('should return the correct state if the type is PAGE_DOWN', () => {
    const expected = 0;
    const page = 1
    const mockAction = {
      type: 'PAGE_DOWN',
      page
    }
    const mockState = 1

    const result = pageReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})