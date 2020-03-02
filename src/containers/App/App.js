import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/index'
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from '../../components/header/header'
import MovieContainer from '../MovieContainer/MovieContainer';
import Watchlist from '../Watchlist/Watchlist';
import { MovieDetail } from '../MovieDetail/MovieDetail';
import Search from '../../components/Search/Search'
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
      <div className='app'>
        <Switch>
          <Route 
            path='/watchlist'
            render={() => <Watchlist />}
          />
          <Route 
            path='/movies/:page' 
            render={() => <MovieContainer />} 
          />
          <Route 
            exact path='/movie/:id'
            render={({ match }) => <MovieDetail 
              selectedMovie={this.props.movies.find(movie => movie.id === parseInt(match.params.id))} />}
          />
          <Route 
            path='/'
            render={() => <MovieContainer />} 
          />
        </Switch>
      </div>
      </>
    )
  }
}

export const mapStateToProps = state => ({
  page: state.page,
  movies: state.movies
})

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
