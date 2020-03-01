import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/index'
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }
  }

  async componentDidMount () {
    const movies = await fetchMovies(this.state.counter)
    this.props.addMovies(movies.results)
  }

  async getMovies() {
    const nextCount = this.state.counter + 1;
    this.pageCounter(nextCount);
    const movies = await fetchMovies(nextCount)
    this.props.addMovies(movies.results)
  }

  pageCounter(nextCount) {
    this.setState({ counter: nextCount })
  }

  render() {
    return(
      <main>
        <h1>Hello World</h1>
        <button onClick={() => this.getMovies()}>{this.state.counter}</button>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(null, mapDispatchToProps)(App);
