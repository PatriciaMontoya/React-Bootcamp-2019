import React from 'react'

import moviesData from '../data/movies.json'
import { API_KEY } from '../constants/movie'
import { getMovies } from '../api_requests/movie'

import MainLayout from '../layouts/MainLayout'
import MovieCard from '../components/MovieCard'
import MovieSearch from '../components/MovieSearch'

class Home extends React.Component {
  state = {
   ...moviesData
  }

  addMovie = (movie) => {
    const movies = this.state.movies
    this.setState({movies: [...movies, movie] })
  }

  searchMovie = (movieDetail) => {
    const movies = []
    movies.push({
      id: movieDetail.id,
      title: movieDetail.title,
      release_date: movieDetail.release_date,
      poster_path: movieDetail.poster_path,
      overview: movieDetail.overview,
      genres: movieDetail.genres
    })

    this.setState({movies})
  }

  deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }

  componentDidMount() {
    getMovies(API_KEY)
    .then((result) => {this.setState({ movies : result.data.results })})
  }

    render() {
        const { movies } = this.state
        return <MainLayout>
                  <MovieSearch className='content' onSearchMovie={this.searchMovie}/>
                  {movies.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
              </MainLayout>
    }
}

export default Home