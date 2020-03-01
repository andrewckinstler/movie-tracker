import React from 'react';
import { connect } from 'react-redux'
import { MovieCard } from '../../components/MovieCard/MovieCard';

export const MovieContainer = ({ movies }) => {
  const movieCards = movies.map(movie => <MovieCard {...movie} key={movie.id} />)

  return ( 
    <div>
      {movieCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)