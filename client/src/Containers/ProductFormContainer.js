/* Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* Actions */
import { sendOpenEdit, postProductForm, openProductForm } from '../actions';
/* Selectors */
import {switchPopupProductForm } from '../selectors';

/* Components */
import ProductForm from '../Components/main/profile/productForm';

class ProductFormContainer extends Component{

    handleClose = () => {
        this.props.openProductForm({
            open: false, 
            product: {
                name: '', 
                description: '',
                image: ''
            }, 
            type: {
                title: '',
                message: ''
            }
        });
    }

    handleSubmit = (values) => {
        if(this.props.popup.type.title === "Editar"){
            this.props.sendUpdate(values);
        }else{
            this.props.postProductForm(values);
        }
        this.handleClose();
    }
    

    render(){
        return(
            <ProductForm product={this.props.popup.product} onSubmit={this.handleSubmit} 
            popup={this.props.popup} 
            handleClose={this.handleClose}></ProductForm>
        );
    }
}

ProductFormContainer.propTypes = {
    popup: PropTypes.object.isRequired,
    sendUpdate: PropTypes.func.isRequired,
    openProductForm: PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>({
    popup: switchPopupProductForm(state),
});

const mapDispatchToProps = (dispatch) => ({
    sendUpdate: value => dispatch(sendOpenEdit(value)),
    openProductForm: value => dispatch(openProductForm(value)),
    postProductForm: value => dispatch(postProductForm(value))

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer);