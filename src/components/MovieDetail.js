import React from 'react'
import { API_KEY } from '../constants/movie'
import { getMovieDetail } from '../api_requests/movie'
import { Link } from "react-router-dom"

class MovieDetail extends React.Component {
    state = {
        checked: true
    }

    componentDidMount() {
        const movieId = this.props.match.params.id
        console.log(this.props)
        getMovieDetail(API_KEY, movieId).then((response) => { 
            this.setState(response.data)
        }).catch((error) => console.log(error))

    }

    render() {
        const { title, release_date, overview, poster_path, genres, tagline} = this.state
        const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}` 
        return <div className='movie-container'>   
        <h1>{title}</h1>
        <h4>{tagline}</h4>
        <div>{release_date}</div>
        <div className='overview-container'>
            <img className='overview-img' src={imageUrl} alt='Movie' />
            <p>{overview}</p>
        </div>
            <ul className='genreList'>
                {genres ? genres.map((genre) => <li className='genreItem' key={genre.id}>{genre.name}</li>) : null}
            </ul>
            <Link to="/" className="link">Volver al Home</Link>
        </div>
    }
}

export default MovieDetail