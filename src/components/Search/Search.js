import React, { Component } from 'react';
import { search } from '../../apiCalls/apiCalls'
import { addMovies } from '../../actions/index'
import { connect } from 'react-redux'
import './search.css'

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleClick = async () => {
    const results = await search(this.state.keyword)
    this.props.addMovies(results)
  }

  render() {
    return (
      <div className='search'>
      <input
          type="text"
          placeholder="Search movies"
          name="keyword"
          value={this.state.keyword}
          onChange={this.handleChange}
      />
      <button className='search-btn' onClick={this.handleClick}>Search</button>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addMovies: keyword => dispatch( addMovies(keyword) )
})

export default connect(null, mapDispatchToProps)(Search)