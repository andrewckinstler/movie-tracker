import React from 'react';
import { Watchlist, mapStateToProps } from './Watchlist';
import { shallow } from 'enzyme';

describe('Watchlist', () => {
  let wrapper, mockProps;
  beforeEach(() => {
    mockProps = [
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
    wrapper = shallow(<Watchlist watchlist={mockProps} />)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a users watchlist', () => {
      const mockState = {
        watchlist: [
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
        watchlist: [
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
})