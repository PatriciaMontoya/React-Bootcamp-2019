import React from 'react'

function MainLayout(props) {
    return <div>
        <h1 className='main-title'>Movie App</h1>
        {/* <MovieSearch onSearchMovie={this.searchMovie}/>  */}
        <div className='content'>
            {props.children}
        </div> 
    </div>
}

export default MainLayout