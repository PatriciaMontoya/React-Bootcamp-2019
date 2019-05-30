import React from 'react'
import { API_KEY } from '../constants/movie'
import { getMovieDetail } from '../api_requests/movie'

class MovieDetail extends React.Component {
    state = {
        checked: true
    }

    componentDidMount() {
        const movieId = this.props.match.params.id
        getMovieDetail(API_KEY, movieId).then((response) => { 
            this.setState(response.data)
            console.log(response.data)
        }).catch((error) => console.log(error))

    }

    render() {
        const { id, title, release_date, overview, poster_path, genres} = this.state
        const releaseYear = release_date ? release_date.slice(0, 4) : ''
        const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}` 
        return <div className='movie-container'>   
            <div className='favourite-container'>
                <h5>{id}</h5>
                <button onClick={this.handleCheck} className='favourite-button'>
                    <span className={`fa fa-star favourite-star ${this.state.checked ? 'checked': ''}`}></span>
                </button>
                <button className='close-button'>
                <i className="fa fa-close"></i>
                </button>
            </div>
        <h1>{title}</h1>
        <div>{releaseYear}</div>
        <div className='overview-container'>
            <img className='overview-img' src={imageUrl} alt='Movie' />
            <p>{overview}</p>
        </div>
            <ul className='genreList'>
                {genres ? genres.map((genre) => <li className='genreItem' key={genre.id}>{genre.name}</li>) : null}
            </ul>
        </div>
    }
}

export default MovieDetail