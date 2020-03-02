import React from 'react';

export const MovieDetail = ({ selectedMovie }) => {
  const image = `https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`

  return (
    <main>
      <img src={image} />
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.release_date}</p>
      <p>{selectedMovie.overview}</p>
    </main>
  )
}