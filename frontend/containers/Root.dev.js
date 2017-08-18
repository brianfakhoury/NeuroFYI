import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import App from '../components/App.js';
import DevTools from './DevTools';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/" component={DevTools} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
