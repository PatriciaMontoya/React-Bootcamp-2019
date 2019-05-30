import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import Home from './views/Home'
import MovieForm from './components/MovieForm';
import MovieDetail from './components/MovieDetail';

function authUser() {
    return {isAuth: true}
}

function Routes() {
    return <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={MovieForm} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route exact path="/addAuth" render={(props) => <MovieForm {...props} userAuth={authUser.isAuth} /> } />
    </React.Fragment>
}

function App() { //AppRouter
    return <Router>
        <Routes />
        {/* {isAuth ? <Routes/> : <PrivateRoutes/>} */}
    </Router>
}

export default App