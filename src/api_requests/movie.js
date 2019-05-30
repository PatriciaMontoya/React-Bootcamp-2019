import axios from 'axios'
import { API_KEY } from '../constants/movie'

export const getMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
}

export const getMovie = (movieSearch) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
}   

export const getMovieDetail = (movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
}
