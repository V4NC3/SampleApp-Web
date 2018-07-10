import react from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Routes = () => {
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/">About </Link>
                </li>
                <li>
                    <Link to="/">Registration </Link>
                </li>
            </ul>

            <hr />

            <Route exact path='/' component={Home} />


        </div>
    </Router>
}

export default Routes;