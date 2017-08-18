import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const Intro = ( { changeCamPos, changeScreen } ) => (
      <div id="center-container">
        <div id="center-div" className="animated fadeIn">
        <img id="brain-logo" alt="Brain" src="./brain-logo.png" />
          <div id="welcome-text">
            <h1>Welcome to Neuro.FYI</h1>
            <h2>Intelligence goes deep.</h2>
          </div>
          <FlatButton onTouchTap={
              ()=> {
                  changeCamPos(1);
                  changeScreen(1);
              }
          } labelStyle={{ fontSize: '50px' }} label="Enter" primary />
          <Link to="/play"><FlatButton label="Login" primary /></Link>
        </div>
      </div>
);

Intro.propTypes = {
    changeCamPos: PropTypes.func,
    changeScreen: PropTypes.func
};


export default Intro;
