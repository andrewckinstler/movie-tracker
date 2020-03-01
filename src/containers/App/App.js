import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/index'
import { Route } from 'react-router-dom';
import { Header } from '../../components/header/header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';

export class App extends Component {
  async componentDidMount () {
    const movies = await fetchMovies(this.props.page)
    this.props.addMovies(movies)
  }

  async getMovies() {
    const movies = await fetchMovies(this.props.page)
    this.props.addMovies(movies)
  }

  render() {
    return(
      <>
        <Header />
        <Route 
          path='/'
          render={() => <MovieContainer />} 
        />
        <Route 
          path='movies/:page' 
          render={() => <MovieContainer />} 
        />
      </>
    )
  }
}

export const mapStateToProps = state => ({
  page: state.page
})

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(null, mapDispatchToProps)(App);
