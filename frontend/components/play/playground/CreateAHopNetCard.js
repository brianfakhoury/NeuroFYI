import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class CreateAHopNetCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="card-content-container">
                <IconButton className="close-button" onTouchTap={()=>this.props.closeCard()} ><NavigationClose /></IconButton>
                <div className="card-content create-simple-net">
                    <h1>Create a memory network!</h1>
                    <hr />
                </div>
            </div>
        );
    }
}

CreateAHopNetCard.propTypes = {
    closeCard: PropTypes.func
};

export default CreateAHopNetCard;
