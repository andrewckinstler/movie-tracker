import React from 'react';
import { shallow } from 'enzyme';
import { addMovies } from '../../actions/index'
import { App, mapStateToProps, mapDispatchToProps } from './App';

it('should match a snapshot', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot();
})

describe('mapStateToProps', () => {
  it('should return an object with a page number and an array of movies', () => {
    const wrapper = shallow(<App />);

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
})

