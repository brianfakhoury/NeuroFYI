import React from 'react';
import PropTypes from 'prop-types';
import { Architect, Trainer, Network } from 'synaptic';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CircularProgress from 'material-ui/CircularProgress';
import Toggle from 'material-ui/Toggle';

class CreateSimpleNetCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            finished: false,
            processing: false,
            options: {
                desc: "",
                type: 'perceptron',
                scene: null,
                pHardness: null,
                lay0: 1,
                inputDescriptions: [""],
                inputTypesBinary: [],
                inputTypes: [],
                hidden: null,
                hiddens: [],
                layN: 1,
                outputTypes: [],
                outputTypesBinary: [],
            },
            trainingText: "",
            trainingData: [],
            NN: {}
        };
    }
    handleNext() {
        if(this.state.step === 0) {
            this.createPerceptron();
        }
        if(this.state.step === 1) {
            this.setState({processing: true});
            setTimeout(()=> {
                this.setState({processing: false});
                this.handleNext();
            }, 5000);
        }
        this.setState({
            step: this.state.step + 1,
            finished: this.state.step >= 2,
        });
    }
    handlePrev() {
        const {step} = this.state;
        if (step > 0) {
            this.setState({step: step - 1});
        }
    }
    handleOptChange(op, event, index, value) {
        switch(op) {
            case 0:
                const op0 = Object.assign({}, this.state.options, {desc: index});
                this.setState({options: op0});
                break;
            case 1:
                const op1 = Object.assign({}, this.state.options, {hiddens: new Array(index + 1).fill(2), hidden: value});
                this.setState({options: op1});
                break;
            case 2:
                const op2 = Object.assign({}, this.state.options, {scene: value});
                this.setState({options: op2});
                break;
            case 3:
                const op3 = Object.assign({}, this.state.options, {pHardness: value});
                this.setState({options: op3});
                break;
            default:
                break;
        }
    }
    renderPart() {
        switch(this.state.step) {
            case 0:
                return(<div>
                    <div>
                        <h2>Configure the network</h2>
                        <TextField
                          hintText="Describe your intelligent task. Think primitive."
                          value={this.state.options.desc}
                          onChange={this.handleOptChange.bind(this, 0)}
                          fullWidth
                        />
                        <SelectField className="selectCreate1" autoWidth={false} floatingLabelText="Category" value={this.state.options.hidden} onChange={this.handleOptChange.bind(this, 1)}>
                          <MenuItem value={'single layer'} primaryText="Simple Predictive" />
                          <MenuItem value={'double layer'} primaryText="Informed choice" />
                          <MenuItem value={'triple layer'} primaryText="Deep Choice" />
                        </SelectField>
                        <SelectField className="selectCreate1" autoWidth={false} floatingLabelText="Scenario" value={this.state.options.scene} onChange={this.handleOptChange.bind(this, 2)}>
                          <MenuItem value={'binary'} primaryText="Binary Decision" />
                          <MenuItem value={'gut'} primaryText="Gut instinct" />
                          <MenuItem value={'reminiscence'} primaryText="How healthy will I be" />
                          <MenuItem value={'approximation'} primaryText="Approximate choice" />
                        </SelectField>
                        <SelectField className="selectCreate1" autoWidth={false} floatingLabelText="How hard is this?" value={this.state.options.pHardness} onChange={this.handleOptChange.bind(this, 3)}>
                          <MenuItem value={0} primaryText="0" />
                          <MenuItem value={1} primaryText="1" />
                          <MenuItem value={2} primaryText="2" />
                          <MenuItem value={3} primaryText="3" />
                          <MenuItem value={4} primaryText="4" />
                          <MenuItem value={5} primaryText="5" />
                        </SelectField>
                        <h2 style={{marginBottom: 0}}>{this.state.trainingText}</h2>
                        {this.renderInputOption()}
                    </div>
                </div>);
            case 1:
                return(<div>
                    <h2 style={{marginBottom: 0}}>The network is initialized! Now specify the data</h2>
                    {this.renderInputSpec()}
                    <h2>Create the supervised data! For each input condition, enter the correct output. Click start training whenever you are ready!</h2>
                    <h3>{this.state.trainingText}</h3>
                    <TextField hintText="Output" onKeyPress={e=>{
                        if(e.key === 'Enter') {
                            this.updateTrainingData.call(this, e.target.value);
                            e.target.value = "";
                        }
                    }} />
                </div>);
            case 2:
                return (<div>
                    {this.trainNetwork()}
                </div>);
            case 3:
                return (<div />);
            default:
                return (<div />);
        }
    }
    trainNetwork() {
        console.log(this.state);
        const network = Network.fromJSON(this.state.NN);
        const trainer = new Trainer(network);
        const set = JSON.parse(JSON.stringify(this.state.trainingData));
        const options = {
            rate: 1.00,
            error: 0.005,
            shuffle: false,
            log: 1000,
            cost: Trainer.cost.CROSS_ENTROPY
        };
        trainer.trainAsync(set, options)
            .then(results=>{
                console.log(results);
                const networkJSON = {
                    network: network.toJSON(),
                    description: this.state.options.desc,
                    input_descriptions: {
                        input_names: this.state.options.inputDescriptions,
                        possible_inputs: {
                            string: this.state.options.inputTypes,
                            binary: this.state.options.inputTypesBinary
                        },
                    },
                    possible_outputs: {
                        string: this.state.options.outputTypes,
                        binary: this.state.options.outputTypesBinary
                    },
                    layer_info: {
                        inputs: this.state.options.lay0,
                        hiddens: [...this.state.options.hiddens],
                        output: this.state.options.layN
                    },
                    p_hardness: this.state.options.pHardness,
                    scenario: this.state.options.scene
                };
                this.setState({NN: networkJSON.network});
                this.props.saveNetwork(networkJSON);
            });
    }
    updateTrainingData(output) {
        const trainingData = JSON.parse(JSON.stringify(this.state.trainingData));
        const options = this.getTrainingOptionArray(true);
        const outputBinary = parseFloat('.'.concat(output.split('').map((char)=>(char.charCodeAt(0).toString())).join('')), 10);
        const newObj = {
            input: options,
            output: [outputBinary]
        };
        trainingData.push(newObj);
        const outputOptions = Object.assign({}, this.state.options);
        if(this.state.options.outputTypes.indexOf(output) === -1) {
            outputOptions.outputTypes.push(output);
            outputOptions.outputTypesBinary.push(outputBinary);
        }
        this.setState({trainingData: trainingData, options: outputOptions}, this.setTrainingText);
    }
    setTrainingText() {
        let returnString = "";
        const data = this.getTrainingOptionArray();
        for(var n = 0; n < data.length; n++) {
            const inputName = this.state.options.inputDescriptions[n];
            const inputChoice = data[n];
            returnString = returnString.concat(`${inputName}: ${inputChoice} `);
        }
        this.setState({trainingText: returnString});
    }
    getTrainingOptionArray(binary) {
        const returnArray = [];
        const currIndex = this.state.trainingData.length;
        // Permuation index-based algorithm
        for(let n = 0; n < this.state.options.inputTypes.length; n++) {
            let i = currIndex % this.state.options.inputTypes[n].length;
            if (n >= 1) {
                let counter = n - 1;
                let decay = 1;
                while(counter >= 0) {
                    decay = decay * this.state.options.inputTypes[counter].length;
                    counter -= 1;
                }
                i = Math.floor((currIndex / decay) % this.state.options.inputTypes[n].length);
            }
            if(binary) {
                returnArray.push(parseFloat('.'.concat(this.state.options.inputTypes[n][i].split('').map((char)=>(char.charCodeAt(0).toString())).join('')), 10));
            } else {
                returnArray.push(this.state.options.inputTypes[n][i]);
            }
        }
        return returnArray;
    }
    renderInputSpec() {
        const returnEls = [];
        for (let n = 0; n < this.state.options.lay0; n++) {
            returnEls.push(<div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={n} className="training-column">
                <TextField
                  hintText="Type each possible input, separate by returning new line"
                  floatingLabelText={this.state.options.inputDescriptions[n]}
                  rows={1}
                  multiLine
                  onChange={(e, val)=>{
                      // Take the text field, split each line as separate input, convert to binary integer, create array element for each input example, push
                      const binaries = val.split(/\n/).map((string)=>(parseFloat('.'.concat(string.split('').map((char)=>(char.charCodeAt(0).toString())).join('')), 10)));
                      const newBinaries = this.state.options.inputTypesBinary.slice();
                      newBinaries[n] = binaries.slice();
                      const newNonBinaries = this.state.options.inputTypes.slice();
                      newNonBinaries[n] = val.split(/\n/);
                      const inputs = Object.assign({}, this.state.options, {inputTypesBinary: newBinaries, inputTypes: newNonBinaries});
                      this.setState({options: inputs, trainingData: []}, this.setTrainingText);
                  }}
              />
                </div>);
        }
        return (<div style={{display: 'flex', flexWrap: 'wrap'}}>
            {returnEls}
        </div>);
    }
    renderInputOption() {
        const returnEls = [];
        for (let n = 0; n < this.state.options.lay0; n++) {
            returnEls.push(<div key={n} className="option-column">
                <TextField
                    floatingLabelText={`Input ${n}`}
                    hintText="Name"
                    value={this.state.options.inputDescriptions[n]}
                    floatingLabelFixed
                    fullWidth
                    onChange={(e, val)=> {
                        const tempIns = this.state.options.inputDescriptions.slice();
                        tempIns[n] = val;
                        const inputDescriptions = Object.assign({}, this.state.options, {inputDescriptions: tempIns});
                        this.setState({options: inputDescriptions});
                    }}/>
                </div>);
        }
        return (<div className="net-options-box">
            {returnEls}
             <FlatButton label="Add another input" secondary onTouchTap={()=>{
                 this.updateLayers();
             }} />
        </div>);
    }
    createPerceptron() {
        const init = new Architect.Perceptron(this.state.options.lay0, ...this.state.options.hiddens, this.state.options.layN);
        this.setState({NN: init.toJSON()});
    }
    updateLayers() {
        const newHeight = this.state.options.lay0 + 1;
        const newHidden = this.state.options.hiddens.slice().fill(newHeight + 1);
        const newInputDescriptions = this.state.options.inputDescriptions.concat([""]);
        const updated = Object.assign({}, this.state.options, {hiddens: newHidden, lay0: newHeight, inputDescriptions: newInputDescriptions});
        this.setState({options: updated});
    }
    render() {
        return(
            <div className="card-content-container">
                <IconButton className="close-button" onTouchTap={()=>this.props.closeCard()} ><NavigationClose /></IconButton>
                <div className="card-content create-simple-net">
                    <h1>Build a new simple neural network!</h1>
                    <hr />
                    <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                      <Stepper activeStep={this.state.step}>
                        <Step>
                          <StepLabel>Design the Network</StepLabel>
                        </Step>
                        <Step>
                          <StepLabel>Train the network</StepLabel>
                        </Step>
                        <Step>
                          <StepLabel>Processing!</StepLabel>
                        </Step>
                      </Stepper>
                      <div>
                        {this.state.finished
                            ? (<div><h2>Your network has been trained and saved!</h2><p>Open the Test A Network card to see your network in action.</p></div>)
                            : this.state.processing
                                ? (<div className="processing-screen">
                                    <Toggle style={{width: '200px'}} labelPosition="right"
                                      label="Render on server"
                                    />
                                    <h2>Training the network!</h2>
                                    <CircularProgress size={300} thickness={5} />
                                </div>)
                                : (<div>
                                    {this.renderPart()}
                                    <div style={{marginTop: 12, float: 'right'}}>
                                        <FlatButton
                                            label="Back"
                                            disabled={this.state.step === 0}
                                            onTouchTap={this.handlePrev.bind(this)}
                                            style={{marginRight: 12}}/>
                                    <RaisedButton
                                        label={this.state.step === 1 ? 'Start training!' : 'Next'}
                                        primary
                                        onTouchTap={this.handleNext.bind(this)}/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateSimpleNetCard.propTypes = {
    closeCard: PropTypes.func,
    saveNetwork: PropTypes.func
};

export default CreateSimpleNetCard;
