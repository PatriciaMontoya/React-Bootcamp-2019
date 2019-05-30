import axios from 'axios'

export const getMovie = (apiKey, movieSearch) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
    // .then((result) => console.log(result.data.results[0].id))
}   

export const getMovieDetail = (apiKey, movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    // .then((result) => console.log(result.data.genres))
}
