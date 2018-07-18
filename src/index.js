import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './utils/store';

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>
        , document.getElementById('root')
);

registerServiceWorker();
