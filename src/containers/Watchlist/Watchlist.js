import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { connect } from 'react-redux'

// adding a line to push

export const Watchlist = ({ watchlist }) => {
  const movieCards = watchlist.map(movie => {
    if(movie.genre_ids.includes(27||53)) {
      return <MovieCard {...movie} key={movie.id} />
    }
  })

  return (
    <div>
      {movieCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  watchlist: state.watchlist
})

export default connect(mapStateToProps)(Watchlist)