import React from 'react';
import PropTypes from 'prop-types';
import { Network, Trainer } from 'synaptic';
import FlatButton from 'material-ui/FlatButton';
import Snap from 'snapsvg';

class TrainANetwork extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.renderNetworkVisualization();
        this.network = Network.fromJSON(this.props.NN);
        console.log('network read from state');
    }
    trainNetwork(network) {
        const trainer = new Trainer(network);
        trainer.train(TRAINING_DATA, {
            rate: 1.00
        });
    }
    renderNetworkVisualization() {
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
        return (
            <div className="banner translucent">
                <div className="banner-center">
                    <h1>Let the network learn by training it.</h1>
                    <p>As an example,</p>
                    <FlatButton label="Click here to train the network" onTouchTap={()=>{
                        this.trainNetwork(this.network);
                        console.log('network trained!', this.network);
                        this.props.serializeNN(this.network.toJSON());
                        console.log('trained network serialized');
                    }} secondary />
                    <svg id="nn1" />
                    <FlatButton label="See how the trained network performs ->" onTouchTap={()=>{
                        this.props.changeScreen(4);
                    }} secondary />
                </div>
            </div>
        );
    }
}

const TRAINING_DATA = [
    {
        input: [1, 1, 1],
        output: [1]
    },
    {
        input: [0, 1, 1],
        output: [1]
    },
    {
        input: [1, 0, 1],
        output: [1]
    },
    {
        input: [1, 1, 0],
        output: [1]
    },
    {
        input: [1, 0, 0],
        output: [0]
    },
    {
        input: [0, 0, 1],
        output: [0]
    },
    {
        input: [0, 1, 0],
        output: [0]
    },
    {
        input: [0, 0, 0],
        output: [0]
    }
];

TrainANetwork.propTypes = {
    NN: PropTypes.object,
    serializeNN: PropTypes.func,
    changeScreen: PropTypes.func
};

export default TrainANetwork;
