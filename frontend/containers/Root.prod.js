import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/App.js';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
