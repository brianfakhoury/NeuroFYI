import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const PlayAppbar = ( { logout } ) => (
    <div>
        <AppBar
            style={{backgroundColor: '#E0E0E0'}}
            title="Neuro.FYI Playground"
            iconElementRight={<FlatButton label="Sign Out" onTouchTap={()=>{logout();}} />}
        />
    </div>
);

PlayAppbar.propTypes = {
    logout: PropTypes.func
};

export default PlayAppbar;
