import React from 'react';
import { Link } from 'react-router-dom';

export const MovieCard = ({ title, poster_path, id }) => {
  const image = `https://image.tmdb.org/t/p/w300/${poster_path}`
  return (
    <Link to={`movie/${id}`}>
      <article>
        <h2>{title}</h2>
        <img src={image} />
      </article>
    </Link>
  )
}
