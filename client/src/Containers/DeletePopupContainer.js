/* Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';

/* Actions */
import { openDeletePopup, deleteProduct } from '../actions';
/* Selectors */
import { switchPopup, switchPopupDelete } from '../selectors';

/* Components */
import DeletePopup from '../Components/main/profile/deletePopup';

class DeletePopupContainer extends Component{
    handleClose = ()=> {
        this.props.openDeletePopup({open: false, product: {}});
    }

    handleDelete = () =>{
        this.props.deleteProduct(this.props.openPopup.product.id);
    }

    render(){
        return(
            <DeletePopup openPopup={this.props.openPopup} handleClose={this.handleClose}
            handleDelete={this.handleDelete} ></DeletePopup>
        );
    }
}

DeletePopupContainer.propTypes = {
    openPopup: PropTypes.object.isRequired,
    openDeletePopup: PropTypes.func.isRequired,
}

const mapStateToProps = (state)=>({
    openPopup: switchPopup(state),
    closePopup: switchPopupDelete(state)
});

const mapDispatchToProps = (dispatch) =>({
    openDeletePopup: value => dispatch(openDeletePopup(value)),
    deleteProduct: value => dispatch(deleteProduct(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePopupContainer);