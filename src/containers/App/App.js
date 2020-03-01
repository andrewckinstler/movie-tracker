import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/index'
import { Route } from 'react-router-dom';
import { Header } from '../../components/header/header'
import MovieContainer from '../MovieContainer/MovieContainer';
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
      <>
        <Header />
        <Route 
        exact path='/'
        render={() => 
          <main>
            <MovieContainer />
            <button onClick={() => this.getMovies()}>{this.state.counter}</button>
          </main>} 
        />
      </>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(null, mapDispatchToProps)(App);
