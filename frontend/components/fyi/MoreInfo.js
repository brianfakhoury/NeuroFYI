import PropTypes from 'prop-types';
import React from 'react';
import Snap from 'snapsvg';
import FlatButton from 'material-ui/FlatButton';

class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.renderNeuronThing();
    }
    renderNeuronThing() {
        const s = Snap('#neuron1');
        const circle = s.circle('10vh', '10vh', '.01vh');
        circle.attr({fill: "r()#fff-#111"});
        setTimeout(()=>{circle.animate({r: '9vh'}, 500, window.mina.easeinout);}, 500);
    }
    render() {
        return(
            <div className="banner translucent">
                <div className="banner-center">
                    <h1>The biological neuron and the artificial neuron.</h1>
                    <h2>The artificial mimics the biological, learning overtime.</h2>
                    <svg id="neuron1" />
                    <h3>1. Connect artificial neurons together, and make a network.</h3>
                    <h3>2. Pass training data through the network, and let it learn.</h3>
                    <h3>3. Activate the network on real data, get real outputs.</h3>
                    <FlatButton label="Make a neural network" onTouchTap={()=>{
                        this.props.changeScreen(2);
                    }} secondary />
                </div>
            </div>
        );
    }
}

MoreInfo.propTypes = {
    changeScreen: PropTypes.func
};

export default MoreInfo;
