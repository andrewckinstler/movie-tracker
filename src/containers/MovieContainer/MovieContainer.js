import React from 'react';
import { connect } from 'react-redux'
import { fetchMovies } from '../../apiCalls/apiCalls'
import MovieCard from '../../components/MovieCard/MovieCard';
import { addMovies, pageUp, pageDown } from '../../actions/index';
import { Link } from 'react-router-dom';

export const MovieContainer = ({ movies, page, pageUp, pageDown, addMovies }) => {
  const movieCards = movies.map(movie => {
    if(movie.genre_ids.includes(27||53)) {
      return <MovieCard {...movie} key={movie.id} />
    }
  })

  const forward = page => {
    pageUp(page)
    getMovies(page + 1)
  }
  
  const backward = page => {
    pageDown(page)
    getMovies(page - 1)
  }

  const getMovies = async page => {
    const movies = await fetchMovies(page)
    addMovies(movies)
  }

  return ( 
    <div>
      {movieCards}
      {page > 1 && 
      <Link to={`movies/page/${page - 1}`} onClick={() => backward(page)}>{page - 1}</Link>}
      <span>{page}</span>
      <Link to={`movies/page/${page + 1}`} onClick={() => forward(page) }>{page + 1}</Link>
    </div>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies,
  page: state.page
})

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) ),
  pageUp: page => dispatch( pageUp(page) ),
  pageDown: page => dispatch( pageDown(page) )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)