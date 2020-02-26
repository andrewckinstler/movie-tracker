export const fetchMovies = page => {
  const url = (`https://api.themoviedb.org/3/discover/movie?api_key=b8c7ec2386e00a3c8344244cfc38796b&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=27,53`)

  const data = fetch(url)
            .then(res => {
              if(!res.ok) {
                throw Error('Error getting movies')
              }
              return res.json()
            })
  return data;
}