import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React Home Page</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.  test.
                </p>

                <Home />
            </div>
        );
    }
}

export default Home;