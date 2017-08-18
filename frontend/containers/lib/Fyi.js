import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Web from '../../components/fyi/Web';
import Intro from '../../components/fyi/Intro';
import MoreInfo from '../../components/fyi/MoreInfo';
import MakeANetwork from '../../components/fyi/MakeANetwork';
import TrainANetwork from '../../components/fyi/TrainANetwork';
import TheNetworkInAction from '../../components/fyi/TheNetworkInAction';
import MoveOn from '../../components/fyi/MoveOn';

import '../../assets/stylesheets/fyi';

class Fyi extends React.Component {
    constructor(props) {
        super(props);
    }
    makeChild() {
        switch(this.props.screenIndex) {
            case 0:
                return <Intro changeScreen={this.props.changeScreen} />;
            case 1:
                return <MoreInfo changeScreen={this.props.changeScreen} />;
            case 2:
                return <MakeANetwork NN={this.props.NN} serializeNN={this.props.serializeNN} changeScreen={this.props.changeScreen} />;
            case 3:
                return <TrainANetwork NN={this.props.NN} serializeNN={this.props.serializeNN} changeScreen={this.props.changeScreen} />;
            case 4:
                return <TheNetworkInAction NN={this.props.NN} changeScreen={this.props.changeScreen} />;
            case 5:
                return <MoveOn changeScreen={this.props.changeScreen} />;
            case 6:
                return <Redirect push to="/play" />;
            default:
                return <div />;
        }
    }
    render() {
        return (
            <div>
                <Web />
                {this.makeChild()}
            </div>
        );
    }
}

Fyi.propTypes = {
    serializeNN: PropTypes.func,
    NN: PropTypes.object,
    changeScreen: PropTypes.func,
    screenIndex: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        screenIndex: state.fyi.screenIndex,
        NN: state.fyi.NN,
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        serializeNN: (NN) => dispatch({type: 'serializeNN', NN}),
        changeScreen: (index) => dispatch({type: 'changeScreen', index})
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Fyi);
