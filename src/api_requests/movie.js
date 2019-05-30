import axios from 'axios'

export const getMovies = (apiKey) => {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
}

export const getMovie = (apiKey, movieSearch) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
}   

export const getMovieDetail = (apiKey, movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
}
