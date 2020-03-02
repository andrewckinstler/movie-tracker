import React from 'react';
import { MovieDetail } from './MovieDetail';
import { shallow } from 'enzyme';

describe('MovieDetail', () => {
  it('should match a snapshot', () => {
    const mockMovie = {
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
    const wrapper = shallow(<MovieDetail selectedMovie={mockMovie} />)
  
    expect(wrapper).toMatchSnapshot()
  })
})