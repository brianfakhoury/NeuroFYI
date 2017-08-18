import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { Network } from 'synaptic';

class TestANetCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NN: {},
            NN_key: -1,
            options: {},
            binaryOptions: {}
        };
    }
    loadTestNetwork(e, key, val) {
        this.setState({NN: this.props.networks[val], NN_key: val}, ()=>this.setOptions());
    }
    renderNetworkList() {
        const returnElement = [<MenuItem key={-1} value={-1} primaryText={'Choose one of your networks'} />];
        this.props.networks.forEach((NN, index)=>{
            returnElement.push(<MenuItem key={index} value={index} primaryText={NN.description} />);
        });
        return returnElement;
    }
    renderOptions() {
        const returnElement = [];
        this.state.NN.input_descriptions.input_names.forEach((category, index)=>{
            const newMenu =   (
                <SelectField
                    key={index}
                    value={this.state.options[category]}
                    onChange={(e, key, val) => {
                        const newOptions = Object.assign({}, this.state.options);
                        const newBinaryOptions = Object.assign({}, this.state.binaryOptions);
                        newOptions[category] = val;
                        newBinaryOptions[index] = this.state.NN.input_descriptions.possible_inputs.binary[index][key];
                        this.setState({options: newOptions, binaryOptions: newBinaryOptions}, ()=>console.log(this.state));
                    }}
                    floatingLabelText={category}>
                        {this.renderOptionItems(index)}
                    </SelectField>);
            returnElement.push(newMenu);
        });
        return returnElement;
    }
    renderOptionItems(categoryIndex) {
        const menuItems = [];
        this.state.NN.input_descriptions.possible_inputs.string[categoryIndex].forEach((input, index)=>{
            const newItem = <MenuItem key={index} value={input} primaryText={input} />;
            menuItems.push(newItem);
        });
        return menuItems;
    }
    setOptions() {
        const newOptions = {};
        const newBinaryOptions = {};
        this.state.NN.input_descriptions.input_names.forEach((category, index)=>{
            newOptions[category] = this.state.NN.input_descriptions.possible_inputs.string[index][0];
            newBinaryOptions[index] = this.state.NN.input_descriptions.possible_inputs.binary[index][0];
        });
        this.setState({options: newOptions, binaryOptions: newBinaryOptions}, ()=>console.log(this.state));
    }
    activateNetwork() {
        const network = Network.fromJSON(this.state.NN.network);
        const activationArray = [];
        const optionKeys = Object.keys(this.state.binaryOptions);
        optionKeys.forEach(p=>activationArray.push(this.state.binaryOptions[p]));
        const result = network.activate(activationArray)[0];
        console.log(activationArray, result);
        let matchIndex = 0;
        let minError = 1;
        for(let n = 0; n < this.state.NN.possible_outputs.binary.length; n++) {
            const instantaneousError = Math.abs(result - this.state.NN.possible_outputs.binary[n]);
            console.log('error', instantaneousError);
            if( instantaneousError < minError) {
                matchIndex = n;
                minError = instantaneousError;
            }
        }
        const guess = this.state.NN.possible_outputs.string[matchIndex];
        return guess;
    }
    render() {
        return(
            <div className="card-content-container">
                <IconButton className="close-button" onTouchTap={()=>this.props.closeCard()} ><NavigationClose /></IconButton>
                <div className="card-content create-simple-net">
                    <h1>Activate and Test!</h1>
                    <hr />
                    <h2>Choose one of your trained networks!</h2>
                    <DropDownMenu value={this.state.NN_key} onChange={this.loadTestNetwork.bind(this)}>
                      {this.renderNetworkList()}
                    </DropDownMenu>
                    {this.state.NN_key >= 0 && <div>
                        <h2>Choose from your options</h2>
                        {this.renderOptions()}
                        <h2>Network guess:</h2>
                        <h1>{this.activateNetwork()}</h1>
                    </div>}
                </div>
            </div>
        );
    }
}

TestANetCard.propTypes = {
    closeCard: PropTypes.func,
    networks: PropTypes.array
};

export default TestANetCard;
