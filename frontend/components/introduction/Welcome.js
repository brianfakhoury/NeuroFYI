import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

const Welcome = ( { changeScreen } ) => (
<div id="center-container">
    <div id="center-div">
        <div>
            <h2>Neuro.FYI is an intelligence collective.</h2>
            <q>"The human brain is the best example of intelligence known, with unsurpassed ability for complex, real-time interaction with a dynamic world. AI researchers trying to imitate its remarkable functionality will benefit by learning more about neuroscience, and the differences between Natural and Artificial Intelligence." - Steve M. Potter</q>
            <h2>Create meaning.</h2>
            <FlatButton onTouchTap={
                ()=> {
                    changeScreen(2);
                }
            } style={{  }} labelStyle={{ fontSize: '40px', padding: '0px' }} label="Begin" primary />
        </div>
    </div>
</div>
);

Welcome.propTypes = {
    changeScreen: PropTypes.func
};

export default Welcome;
