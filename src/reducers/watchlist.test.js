import { watchlistReducer } from './watchlist';

describe('watchlistReducer', () => {
  it('should return initial state if no state is provided', () => {
    const expected = [];
    const result = watchlistReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the correct state when the type is ADD_FAVORITE', () => {
    const toWatch = { 
      "title": "The Invisible Man",
      "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see."
    }

    const mockAction = {
      type: 'ADD_FAVORITE',
      toWatch
    }

    const mockState = [
      {
        "title": "Countdown",
        "overview": "A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out."
      }
    ]

    const expected = [
      {
        "title": "Countdown",
        "overview": "A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out."
      },
      { 
        "title": "The Invisible Man",
        "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see."
      }
    ]

    const result = watchlistReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})