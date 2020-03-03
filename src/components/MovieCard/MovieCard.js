import React from 'react';
import { Link } from 'react-router-dom';
import { addToWatchList } from '../../actions/index'
import { connect } from 'react-redux'
import './MovieCard.css'

export const MovieCard = ({ title, poster_path, id, addToWatchList, movies }) => {
  const image = `https://image.tmdb.org/t/p/w300/${poster_path}`

  const movie = movies.find(movie => movie.id === id)

  return (
    <div className='card'>
      <Link to={`movie/${id}`}>
        <article>
          <img src={image} />
          <div className='title-container'>
            
          </div>
        </article>
      </Link>
      <h3>{title}</h3>
      <div>
      <button onClick={() => addToWatchList(movie)}>Add to your watchlist</button>
      </div>
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
