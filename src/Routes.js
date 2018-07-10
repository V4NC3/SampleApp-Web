import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/client/Login';
import Logout from './components/client/Logout';
import Registration from './components/client/Registration';

//Routes
const Routes = () => (
    <Router>
        <div className='nav'>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/registration">Registration </Link>
                </li>
            </ul>

            <hr />

            {/* routes */}
            <Route exact path='/' component={Home} />
            <Route path='about' component={About} />
            <Route path='login' component={Login} />
            <Route path='logout' component={Logout} />
            <Route path='registration' component={Registration} />

        </div>
    </Router>
);

//React codes

export default Routes;