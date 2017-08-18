import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Intro from '../../components/introduction/Intro';
import Welcome from '../../components/introduction/Welcome';
import Wormhole from '../../components/introduction/Wormhole';
import Transition from '../../components/introduction/Transition';

import '../../assets/stylesheets/intro';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    makeChild() {
        let child;
        switch (this.props.screenIndex) {
            case 0:
                child = (<div>
                    <Intro changeScreen={this.props.changeScreen} changeCamPos={this.props.changeCamPos} />
                </div>);
                break;
            case 1:
                child = (<div>
                    <Welcome changeScreen={this.props.changeScreen} changeCamPos={this.props.changeCamPos} />
                </div>);
                break;
            case 2:
                child = (<div>
                    <Transition changeScreen={this.props.changeScreen} changeCamPos={this.props.changeCamPos} />
                </div>);
                break;
            case 3:
                child = <Redirect push to="/fyi" />;
                break;
            default:
                child = <div />;
                break;
        }
        return child;
    }

    render() {
        return (
            <div>
                <Wormhole connectCamera={this.props.connectCamera} wormholeCameraPosition={this.props.wormholeCameraPosition}/>
                {this.makeChild()}
            </div>
        );
    }
}

Introduction.propTypes = {
    wormholeCameraPosition: PropTypes.number,
    connectCamera: PropTypes.func,
    changeCamPos: PropTypes.func,
    screenIndex: PropTypes.number,
    changeScreen: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wormholeCameraPosition: state.intro.wormholeCameraPosition,
        screenIndex: state.intro.screenIndex
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        connectCamera: camera => dispatch({ type: 'connectCamera', camera }),
        changeCamPos: position => dispatch({ type: 'changeCamPos', position }),
        changeScreen: screenIndex => dispatch({ type: 'setScreen', screenIndex })
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Introduction);
