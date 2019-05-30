import React from 'react'
import { API_KEY } from '../constants/movie'
import { getMovie, getMovieDetail } from '../api_requests/movie'



class MovieSearch extends React.Component {
    state = {
        movieSearch: '',
        movieId:'',
        genres:[]
    }

    handleChange = (e) => {
        this.setState({movieSearch: e.target.value})
    }

    handleSearch = (e) => {
        e.preventDefault()
        getMovie(API_KEY, this.state.movieSearch)
        .then((response) => {
            getMovieDetail(API_KEY, response.data.results[0].id)
           .then((response) => {
               console.log(response.data)
                this.props.onSearchMovie(response.data)
            })
        }).catch((error) => console.log(error))
    }

    render() {
        return <form className='searchForm' onSubmit={this.handleSearch}>
                    <input name='search' value= {this.state.movieSearch} onChange={this.handleChange} placeholder='Search movie'/>
                    <input type='submit' value='Search'/>
                </form>
    }
}

export default MovieSearch