import React, { Component } from 'react';
import { fetchMovies } from '../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { addMovies } from '../actions/index'
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      counter: 1
    }
  }

  async componentDidMount () {
    const movies = await fetchMovies(this.state.counter)
    this.props.addMovies(movies.results)
  }

  async getMovies() {
    this.pageCounter()
    const movies = await fetchMovies(this.state.counter)
    this.setState({ movies: movies.results })
  }

  pageCounter() {
    this.setState({ counter: this.state.counter + 1 })
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
