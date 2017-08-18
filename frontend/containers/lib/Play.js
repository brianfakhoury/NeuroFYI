import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Landscape from '../../components/play/Landscape';
import Login from '../../components/play/Login';

import PlayAppbar from '../../components/play/playground/PlayAppbar';
import SideBar from '../../components/play/playground/SideBar';

import ViewYourNetworksCard from '../../components/play/playground/ViewYourNetworksCard';
import ConnectNetworksCard from '../../components/play/playground/ConnectNetworksCard';
import TestANetCard from '../../components/play/playground/TestANetCard';
import CreateSimpleNetCard from '../../components/play/playground/CreateSimpleNetCard';
import CreateAHopNetCard from '../../components/play/playground/CreateAHopNetCard';

import '../../assets/stylesheets/play';

class Play extends React.Component {
    constructor(props) {
        super(props);
    }
    getUserNetworks() {
        axios.post('/api/user/networks').then(({data})=>{
            data.forEach((network)=>this.props.loadNetwork(network.data));
        });
    }
    saveNetwork(networkJSON) {
        axios.post('/api/save/network', {network: networkJSON});
        this.props.loadNetwork(networkJSON);
    }
    logout() {
        this.props.logoutUser();
        axios.post('/logout');
    }
    screenComponents() {
        return(<div>
            <PlayAppbar logout={this.props.logoutUser.bind(this)} />
            <div className="content-div">
                <div className="side-bar">
                    <SideBar showCardScreen={this.props.showCardScreen} />
                </div>
                <div className="main-content-div-container">
                    <div className="main-content-div">
                        {this.screenCards()}
                    </div>
                </div>
            </div>
        </div>);
    }
    screenCards() {
        const cards = this.props.cardScreens.map((item, index) => {
            let comp = null;
            switch(item) {
                case '1':
                    comp = <ViewYourNetworksCard key={index} closeCard={this.props.closeCard.bind(null, index)} />;
                    break;
                case '2':
                    comp = <ConnectNetworksCard key={index} closeCard={this.props.closeCard.bind(null, index)} />;
                    break;
                case '3':
                    comp = <TestANetCard networks={this.props.networks} key={index} closeCard={this.props.closeCard.bind(null, index)} />;
                    break;
                case '4':
                    comp = <CreateSimpleNetCard saveNetwork={this.saveNetwork.bind(this)} key={index} closeCard={this.props.closeCard.bind(null, index)} />;
                    break;
                case '5':
                    comp = <CreateAHopNetCard key={index} closeCard={this.props.closeCard.bind(null, index)} />;
                    break;
                default:
                    return <div />;
            }
            return comp;
        });
        return cards;
    }
    render() {
        return (
            <div>
                {
                    this.props.user
                    ? this.screenComponents()
                    : <div>
                        <Landscape /><Login getUserNetworks={this.getUserNetworks.bind(this)} loadUser={this.props.loadUser} />
                        {/* {this.screenComponents()} */}
                        </div>
                }
            </div>
        );
    }
}

Play.propTypes = {
    user: PropTypes.bool,
    loadUser: PropTypes.func,
    cardScreens: PropTypes.array,
    showCardScreen: PropTypes.func,
    closeCard: PropTypes.func,
    loadNetwork: PropTypes.func,
    networks: PropTypes.array,
    logoutUser: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        user: state.play.user,
        cardScreens: state.play.cardScreens,
        networks: state.play.networks
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        loadUser: () => dispatch({type: 'loadUser'}),
        showCardScreen: cardIndex => dispatch({type: 'showCardScreen', cardIndex}),
        closeCard: index => dispatch({type: 'closeCard', index}),
        loadNetwork: networkJSON => dispatch({type: 'loadNetwork', networkJSON}),
        logoutUser: () => dispatch({type: 'logout'})
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Play);
