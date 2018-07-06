import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from '../images/logo.svg';
//import './App.css';
import '../containers/App.css';

class App extends Component {
    render() {
        return (
            <div className="Home">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Home Page</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
}

export default Home;