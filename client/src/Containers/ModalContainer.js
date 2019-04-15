/* Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';

/* Actions */
import { openModal } from '../actions';
/* Selectors */
import { switchModal } from '../selectors';

/* Components */
import Modal from '../Components/main/home/modal';


class ModalContainer extends Component {

    handleClose = () =>{
        this.props.openModal({
            open: false, 
            image: '', 
            contentType: ''
        });
    }

    render(){
        return(
            <Modal handleClose={this.handleClose} modal={this.props.modal}></Modal>
        );
    }
}

ModalContainer.propTypes = {
    modal: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
}

let mapStateToProps = (state) => ({
    modal: switchModal(state)
});

let mapDispatchToProps = (dispatch) =>({
    openModal: value => dispatch(openModal(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);