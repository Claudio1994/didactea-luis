import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopupMessage from '../Components/globalComponents/popupMessage';

import { popupMessage } from '../selectors';

import { messageUpdate } from '../actions';

class PopupMessageContainer extends Component{

    handleClose = () => {
        this.props.switchPopupMessage ({
            open: false,
            ok: '',
            message: ''
        });
        
    };
    
    render(){
        return(
            <PopupMessage message={this.props.popupMessage} handleClose={this.handleClose}>
            </PopupMessage>
        )
    }
}

const mapStateToProps = (state) => ({
    popupMessage: popupMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
    switchPopupMessage: value => dispatch(messageUpdate(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupMessageContainer);