import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';

import Introduction from '../containers/lib/Introduction';
import Fyi from '../containers/lib/Fyi';
import Play from '../containers/lib/Play';

import '../assets/stylesheets/animate';

const App = () => (
    <div>
        {/* <Route path="/" render={()=>(
            <AppBar
              title="Neuro.FYI"
            />)} /> */}
        <Route exact path="/" component={Introduction} />
        <Route path="/fyi" component={Fyi} />
        <Route path="/play" component={Play} />
    </div>
);

export default App;
