import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Network } from 'synaptic';
import Snap from 'snapsvg';

class TheNetworkInAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0
        }
    }
    componentDidMount() {
        this.network = this.deserializeNeuralNet();
        console.log('trained network loaded!', this.network);
    }
    deserializeNeuralNet() {
        return Network.fromJSON(this.props.NN);
    }
    activateNetwork(network, ...args) {
        return network.activate(...args);
    }
    runSpacedTests(network) {
        console.log('Running tests...');
        let n = 0;
        const a = setInterval(()=> {
            const testResult = this.activateNetwork(network, TEST_SET[n]);
            console.log(n, 'network activated!', TEST_SET[n], testResult);
            this.setState({num1: testResult});
            n++;
            if(n === 36) {
                clearInterval(a);
            }
        }, 250);
    }
    render() {
        return(
            <div className="banner translucent">
                <div className="banner-center">
                    <h1>See the network perform</h1>
                    <h2>The network has learned how to interpret the data.</h2>
                    <h2>Press the button below to watch the network process data</h2>
                    <FlatButton label="See how the trained network performs" onTouchTap={()=>{
                        this.runSpacedTests(this.network);
                    }} secondary />
                    <h1>Confidence</h1>
                    <h1 style={{margin: 0, fontSize: '100pt'}}>{this.state.num1}</h1>
                    <FlatButton label="Continue ->" onTouchTap={()=>{
                        this.props.changeScreen(5);
                    }} secondary />
                </div>
            </div>
        );
    }
}

const TEST_SET = [[1, 1, 1], [1, 0, 1], [1, 0, 0], [0, 0, 0], [1, 0, 1],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0],
                [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0]];

TheNetworkInAction.propTypes = {
    NN: PropTypes.object,
    changeScreen: PropTypes.func
};

export default TheNetworkInAction;
