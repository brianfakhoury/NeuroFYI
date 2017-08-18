import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import ActionLightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ActionViewList from 'material-ui/svg-icons/action/view-list';

const labS = {
    color: 'white',
    display: 'block'
};

const mainStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    height: '18vh',
    padding: '10px'
};

const iconStyle = {
    fill: 'white',
    width: '80x',
    height: '80px',
};

const SideBar = ( { showCardScreen } ) => (
    <div>
        <FlatButton onTouchTap={()=>{
            showCardScreen(1);
        }} label="View your networks" labelStyle={labS} icon={<ActionViewList style={iconStyle} />} style={mainStyle} fullWidth />
        <FlatButton onTouchTap={()=>{
            showCardScreen(2);
        }} label="Connect networks" labelStyle={labS} icon={<ActionLightbulbOutline style={iconStyle} />} style={mainStyle} fullWidth />
        <FlatButton onTouchTap={()=>{
            showCardScreen(3);
        }} label="Test a network" labelStyle={labS} icon={<MapsDirectionsRun style={iconStyle} />} style={mainStyle} fullWidth />
        <FlatButton onTouchTap={()=>{
            showCardScreen(4);
        }} label="Create a predictive network" labelStyle={labS} icon={<ContentCreate style={iconStyle} />} style={mainStyle} fullWidth />
        <FlatButton onTouchTap={()=>{
            showCardScreen(5);
        }} label="Create a memory network" labelStyle={labS} icon={<ContentCreate style={iconStyle} />} style={mainStyle} fullWidth />
    </div>
);

SideBar.propTypes = {
    showCardScreen: PropTypes.func
};

export default SideBar;
