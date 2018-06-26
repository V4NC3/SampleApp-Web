import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './containers/index.css';
//import App from './App';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
