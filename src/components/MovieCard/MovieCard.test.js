import React from 'react';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { shallow } from 'enzyme';
import { addToWatchList } from '../../actions/index';

describe('MovieCard', () => {
  let wrapper, mockMovie, movies;
  beforeEach(() => {
    movies = [
      {
          "genre_ids": [
              27,
              9648,
              878,
              53
          ],
          "id": 555974,
          "title": "The Invisible Man",
          "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
          "release_date": "2020-02-26"
      },
      {
          "genre_ids": [
              27,
              9648,
              53
          ],
          "id": 570670,
          "title": "Brahms: The Boy II",
          "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
          "release_date": "2020-02-20"
      }
    ]
    mockMovie = {
      "genre_ids": [
          27,
          9648,
          878,
          53
      ],
      "id": 555974,
      "poster_path": "/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
      "title": "The Invisible Man",
      "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
      "release_date": "2020-02-26"
    }
    wrapper = shallow(<MovieCard movies={movies} {...mockMovie} key={mockMovie.id} />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return an object with an array of movies', () => {
  
      const mockState = {
        movies: [
          {
              "genre_ids": [
                  27,
                  9648,
                  878,
                  53
              ],
              "id": 555974,
              "title": "The Invisible Man",
              "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
              "release_date": "2020-02-26"
          },
          {
              "genre_ids": [
                  27,
                  9648,
                  53
              ],
              "id": 570670,
              "title": "Brahms: The Boy II",
              "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
              "release_date": "2020-02-20"
          }
        ]
      }
  
      const expected = {
        movies: [
          {
              "genre_ids": [
                  27,
                  9648,
                  878,
                  53
              ],
              "id": 555974,
              "title": "The Invisible Man",
              "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
              "release_date": "2020-02-26"
          },
          {
              "genre_ids": [
                  27,
                  9648,
                  53
              ],
              "id": 570670,
              "title": "Brahms: The Boy II",
              "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
              "release_date": "2020-02-20"
          }
        ]
      }
  
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with an addMovies action when addMovies is called', () => {
      const mockDispatch = jest.fn();
      const movie = {
            "genre_ids": [
                27,
                9648,
                878,
                53
            ],
            "title": "The Invisible Man",
            "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
            "release_date": "2020-02-26"
        }
      const action = addToWatchList(movie)
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.addToWatchList(movie);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})