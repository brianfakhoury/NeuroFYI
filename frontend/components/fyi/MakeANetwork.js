import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Architect } from 'synaptic';
import Snap from 'snapsvg';

class MakeANetwork extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.renderDisconnectedNet();
    }
    makePerceptron() {
        return new Architect.Perceptron(3, 3, 1);
    }
    renderDisconnectedNet() {
        const s = Snap('#nn1');
        const neurons = s.g();
        const n1 = s.circle('10vw', '10vh', '5vh');
        const n2 = s.circle('10vw', '25vh', '5vh');
        const n3 = s.circle('25vw', '10vh', '5vh');
        const n4 = s.circle('25vw', '25vh', '5vh');
        const n5 = s.circle('25vw', '40vh', '5vh');
        const n6 = s.circle('40vw', '10vh', '5vh');
        neurons.add(n1, n2, n3, n4, n5, n6);
        neurons.attr({fill: "r()#fff-#111"});
    }
    renderConnectionLines() {
        const s = Snap('#nn1');
        const connections = s.g();
        const c1 = s.line('10vw', '10vh', '25vw', '10vh');
        const c2 = s.line('10vw', '10vh', '25vw', '25vh');
        const c3 = s.line('10vw', '10vh', '25vw', '40vh');
        const c4 = s.line('10vw', '25vh', '25vw', '10vh');
        const c5 = s.line('10vw', '25vh', '25vw', '25vh');
        const c6 = s.line('10vw', '25vh', '25vw', '40vh');
        const c7 = s.line('25vw', '10vh', '40vw', '10vh');
        const c8 = s.line('25vw', '25vh', '40vw', '10vh');
        const c9 = s.line('25vw', '40vh', '40vw', '10vh');
        connections.add(c1, c2, c3, c4, c5, c6, c7, c8, c9);
        connections.attr({stroke: '#ffffff'});
    }
    render() {
        return(
            <div className="banner translucent">
                <div className="banner-center">
                    <h1>Connect neurons together to make a network</h1>
                    <h2>Assemble a network with TWO inputs and ONE output.</h2>
                    <FlatButton label="Click here to connect these 3 layers of neurons" onTouchTap={()=>{
                        const nn = this.makePerceptron();
                        console.log('Network created!', nn);
                        this.props.serializeNN(nn.toJSON());
                        console.log('network serialized to state');
                        this.renderConnectionLines();
                    }} secondary />
                    <svg id="nn1" />
                    <FlatButton label="Now train the network ->" onTouchTap={()=>{
                        this.props.changeScreen(3);
                    }} secondary />
                </div>
            </div>
        );
    }
}

MakeANetwork.propTypes = {
    changeScreen: PropTypes.func,
    serializeNN: PropTypes.func,
    NN: PropTypes.object
};

export default MakeANetwork;
