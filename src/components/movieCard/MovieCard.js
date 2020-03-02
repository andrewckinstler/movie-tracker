import React from 'react';
import { Link } from 'react-router-dom';
import { addToWatchList } from '../../actions/index'
import { connect } from 'react-redux'

export const MovieCard = ({ title, poster_path, id, addToWatchList, movies }) => {
  const image = `https://image.tmdb.org/t/p/w300/${poster_path}`

  const movie = movies.find(movie => movie.id === id)

  return (
    <div>
      <Link to={`movie/${id}`}>
        <article>
          <h2>{title}</h2>
          <img src={image} />
        </article>
      </Link>
      <button onClick={() => addToWatchList(movie)}>Add to your watchlist</button>
    </div>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies
})

export const mapDispatchToProps = dispatch => ({
  addToWatchList: toAdd => dispatch( addToWatchList(toAdd) )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
