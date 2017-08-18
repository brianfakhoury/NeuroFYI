import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: 'login',
            alt: 'register',
            username: "",
            password: "",
            failed: false
        };
        // TODO add cookie loading
    }
    login() {
        axios.post(this.state.direction, {
            username: this.state.username,
            password: this.state.password
        })
        .then(() => {
            this.props.loadUser();
            this.props.getUserNetworks();
        })
        .catch((e)=>{
            console.log(e);
            this.setState({failed: true});
        });
    }
    render() {
        return(
            <div className="login-div">
                <img style={{width: "15vh"}} alt="Brain" src="./brain-logo.png" />
                <h1>{this.state.alt === "login" ? "Register for " : "Login to "}Neuro.FYI</h1>
                {!this.state.failed || <p style={{color: '#F44336'}}>Failed to login. Try again.</p>}
                <TextField
                    id="username-input"
                    hintText="Username"
                    floatingLabelText="Username"
                    floatingLabelStyle={{color: '#616161'}}
                    floatingLabelShrinkStyle={{color: '#00BCD4'}}
                    hintStyle={{color: '#616161'}}
                    inputStyle={{color: 'white'}}
                    onChange={(e, value)=>{this.setState({username: value});}}/>
                <TextField
                    id="password-input"
                    hintText="Password"
                    floatingLabelText="Password"
                    floatingLabelStyle={{color: '#616161'}}
                    floatingLabelShrinkStyle={{color: '#00BCD4'}}
                    hintStyle={{color: '#616161'}}
                    inputStyle={{color: 'white'}}
                    type="password"
                    onChange={(e, value)=>{this.setState({password: value});}}/>
                <FlatButton onTouchTap={()=> {this.login();}} label={this.state.direction} primary />
                <FlatButton onTouchTap={()=> {this.setState({direction: this.state.alt, alt: this.state.direction});}} label={this.state.alt} style={{ color: "#616161" }} />
            </div>
        );
    }
}

Login.propTypes = {
    loadUser: PropTypes.func,
    getUserNetworks: PropTypes.func
};

export default Login;
