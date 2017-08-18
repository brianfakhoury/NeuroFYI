import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

const MoveOn = ( { changeScreen } ) => (
    <div className="banner translucent">
        <div className="banner-center">
            <h1>What's Next</h1>
            <h3>Go exploring! Start by registering here.</h3>
            <FlatButton label="Sign Up" onTouchTap={()=>{
                changeScreen(6);
            }} secondary />
        </div>
    </div>
);

MoveOn.propTypes = {
    changeScreen: PropTypes.func
};

export default MoveOn;
