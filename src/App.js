import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import './assets/css/media.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>                                                     
                </Switch>              
                <Footer></Footer>
            </Router>
        )
    }
}
