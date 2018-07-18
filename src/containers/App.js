import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../containers/App.css';
import Routes from '../../src/Routes';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Routes isLoggedIn = {this.props.user.isLoggedIn} />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    user:state.UserReducer
  };
};


export default connect(mapStateToProps)(App);