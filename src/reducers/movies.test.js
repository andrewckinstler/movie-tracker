import { moviesReducer } from './movies';

describe('moviesReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return the correct state when type is ADD_MOVIES', () => {
    const movies = {
      results: [
    { "title": "The Invisible Man",
      "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see."
    }, 
    { "title": "Brahms: The Boy II",
    "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms."
  }]}

    const mockAction = {
      type: 'ADD_MOVIES',
      movies
    }
    const mockState = {
      results: [
      {
        "title": "Countdown",
        "overview": "A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out."
      },
      {
        "title": "Ready or Not",
        "overview": "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game."
      }
    ]}
    const expected = [
      { "title": "The Invisible Man",
        "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see."
      }, 
      { "title": "Brahms: The Boy II",
      "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms."
    }];
    const result = moviesReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  })
})