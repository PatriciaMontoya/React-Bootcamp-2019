import React from 'react';

class MovieCard extends React.Component {
  state = {
    checked: false,
  }

  handleCheck = () => {
    this.setState((state, props) => ({
      checked: !state.checked
    }), () => console.log('favourite added'))
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get state from props')
    if(props.genre === "horror") {
      return {
        checked: true,
      }
    }
    return null
  }

  shouldComponentUpdate () {
    //Remember to return true or false
    return true
  }


  componentDidMount () {
    //console.log(this.state)
  }

  componentDidUpdate (prevProps, prevState) {
    //console.log(this.state)
  }

  componentWillUnmount() {
    console.log('I will unmount')
  }
  
  render() {
    const { id, title, release_date, poster_path, overview, deleteMovie } = this.props
    const releaseYear = release_date ? release_date.slice(0, 4) : ''
    const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}` 
    return <div className='movie-container'>   
        <div className='favourite-container'>
            <button onClick={this.handleCheck} className='favourite-button'>
                <span className={`fa fa-star favourite-star ${this.state.checked ? 'checked': ''}`}></span>
            </button>
            <button onClick={() => deleteMovie(id)} className='close-button'>
              <i className="fa fa-close"></i>
            </button>
        </div>
      <h1>{title}</h1>
      <div>{releaseYear}</div>
      <div className='overview-container'>
        <img className='overview-img' src={imageUrl} alt='Movie' />
        <p>{overview}</p>
      </div>
    </div>
    }
}

MovieCard.defaultProps = {
  genre: 'comedia',
}

export default MovieCard