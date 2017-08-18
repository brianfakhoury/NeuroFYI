// Combine reducers for use by store
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import introReducer from './introReducer';
import fyiReducer from './fyiReducer';
import playReducer from './playReducer';
// Combine the routing reducer and game reducer
const rootReducer = combineReducers({
    routing: routerReducer,
    intro: introReducer,
    fyi: fyiReducer,
    play: playReducer
});

export default rootReducer;
