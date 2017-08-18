import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import './assets/stylesheets/base.scss';

const store = configureStore();

injectTapEventPlugin();

render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Root store={store} history={history} />
    </MuiThemeProvider>,
    document.getElementById('root')
);
