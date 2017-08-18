import React from 'react';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';


const Intro = ( { changeScreen } ) => (
    <div className="banner">
        <div className="banner-center">
            <h1 style={{fontSize: '75pt', margin: 0}}>FYI. Artifical intelligence mimics our biological intelligence.</h1>
            <IconButton
                style={{width: 480, height: 480}}
                iconStyle={{width: 240, height: 240}}
                onTouchTap={
                    () => changeScreen(1)
                }>
                <NavigationArrowForward color={'#2196F3'} />
            </IconButton>
        </div>
    </div>
);

Intro.propTypes = {
    changeScreen: PropTypes.func,
};

export default Intro;
