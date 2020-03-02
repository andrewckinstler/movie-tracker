import React from 'react';
import { shallow } from 'enzyme';
import { addMovies, pageUp, pageDown } from '../../actions/index'
import { MovieContainer, mapStateToProps, mapDispatchToProps } from './MovieContainer'

describe('MovieContainer', () => {
  let wrapper, mockProps
  beforeEach(() => {
    mockProps = {
      page: 1,
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

    wrapper = shallow(<MovieContainer {...mockProps} />)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with a page number and an array of movies', () => {
      const mockState = {
        page: 1,
        movies: [
          {
              "genre_ids": [
                  27,
                  9648,
                  878,
                  53
              ],
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
              "title": "Brahms: The Boy II",
              "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
              "release_date": "2020-02-20"
          }
        ]
      }
  
      const expected = {
        page: 1,
        movies: [
          {
              "genre_ids": [
                  27,
                  9648,
                  878,
                  53
              ],
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
      const movies = [
        {
            "genre_ids": [
                27,
                9648,
                878,
                53
            ],
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
            "title": "Brahms: The Boy II",
            "overview": "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
            "release_date": "2020-02-20"
        }
      ]
      const action = addMovies(movies)
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.addMovies(movies);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })

    it('should call dispatch when pageDown is called', () => {
      const mockDispatch = jest.fn();
      const page = 1
      const action = pageDown(page)
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.pageDown(page);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })

    it('should call dispatch when pageUp is called', () => {
      const mockDispatch = jest.fn();
      const page = 1
      const action = pageUp(page)
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.pageUp(page);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})