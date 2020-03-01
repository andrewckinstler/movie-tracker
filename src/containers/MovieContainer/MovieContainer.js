import React from 'react';
import { connect } from 'react-redux'
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { pageUp, pageDown } from '../../actions/index'

export const MovieContainer = ({ movies, page, pageUp, pageDown }) => {
  const movieCards = movies.map(movie => <MovieCard {...movie} key={movie.id} />)

  return ( 
    <div>
      {movieCards}
      {page > 1 && <button onClick={() => pageDown(page) }>{page - 1}</button>}
      <span>{page}</span>
      <button onClick={() => pageUp(page) }>{page + 1}</button>
    </div>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies,
  page: state.page
})

export const mapDispatchToProps = dispatch => ({
  pageUp: page => dispatch( pageUp(page) ),
  pageDown: page => dispatch( pageDown(page) )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)