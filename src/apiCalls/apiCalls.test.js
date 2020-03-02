import { fetchMovies, search } from './apiCalls';

describe('fetchMovies', () => {
  let mockResponse = [{
    "popularity": 229.003,
    "vote_count": 110,
    "video": false,
    "poster_path": "/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
    "id": 570670,
    "adult": false,
    "backdrop_path": "/q5t01d3MBFFsjwRjoS61LxXEEOr.jpg",
    "original_language": "en",
    "original_title": "The Invisible Man",
    "genre_ids": [
        27,
        9648,
        878,
        53
    ],
    "title": "The Invisible Man",
    "vote_average": 7.6,
    "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    "release_date": "2020-02-26"
}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct URL', () => {
    fetchMovies(1);
    expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/discover/movie?api_key=b8c7ec2386e00a3c8344244cfc38796b&language=en-US&include_adult=false&include_video=false&page=1&with_genres=27,53')
  })
  it('should return an array of movies', () => {
    fetchMovies()
      .then(movies => expect(movies).toEqual(mockResponse))
  })
  it('should warn user if there is an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
      })
    })
    expect(fetchMovies(1)).rejects.toEqual(Error('Error getting movies'))
  });
})

describe('Search', () => {
  let mockResponse = [{
    "popularity": 229.003,
    "vote_count": 110,
    "video": false,
    "poster_path": "/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
    "id": 570670,
    "adult": false,
    "backdrop_path": "/q5t01d3MBFFsjwRjoS61LxXEEOr.jpg",
    "original_language": "en",
    "original_title": "The Invisible Man",
    "genre_ids": [
        27,
        9648,
        878,
        53
    ],
    "title": "The Invisible Man",
    "vote_average": 7.6,
    "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    "release_date": "2020-02-26"
}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  it('should call fetch with the correct URL', () => {
    search('hello');
    expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/search/movie?api_key=b8c7ec2386e00a3c8344244cfc38796b&language=en-US&query=hello&page=1&include_adult=false')
  })
  it('should warn user if there is an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
      })
    })
    expect(fetchMovies(1)).rejects.toEqual(Error('Movie not found'))
  })
})