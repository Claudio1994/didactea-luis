/* Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';

/* Actions */
import { editProfileMenu, fetchProducts, openProductForm, openDeletePopup } from '../actions';
/* Selectors */
import { switchEditProfileMenu, getProducts } from '../selectors';

/* Components */
import Profile from '../Components/main/profile';


class ProfileContainer extends Component{
    componentWillMount(){
        if(this.props.myProducts.length===0){
            this.props.getProducts(null);
        }
    }

    handleClickMenu = (event) =>{
        this.props.setAnchorEl(event.currentTarget);
    }

    handleCloseMenu = () =>{
        this.props.setAnchorEl(null);
    }

    handleClickAddProduct = () => {
        this.props.openProductForm({
            open: true, 
            product: {}, 
            type: {
                title: 'Agregar producto',
                message: 'Debe introducir todos los campos'
            }
        });
    }

    handleClickEdit = (product)=> (event) => {
        this.props.openProductForm({
            open: true, 
            product, 
            type: {
                title: 'Editar',
                message: 'En caso de no enviar información en los campos, estos no se editarán'
            }
        });
    }

    handleClickDelete = (product) => (event) => {
        this.props.openDeletePopup({open: true, product:{id: product._id, name: product.name}})
    }
 
    render(){
        const openProfileMenu = Boolean(this.props.anchorEl);
        return(
            <Profile 
                openProfileMenu={openProfileMenu}
                handleClickAddProduct={this.handleClickAddProduct}
                handleClickDelete={this.handleClickDelete}
                handleClickEdit={this.handleClickEdit}
                handleClickMenu={this.handleClickMenu}
                handleCloseMenu={this.handleCloseMenu}
                myProducts={this.props.myProducts}></Profile>
        );
    }
}

ProfileContainer.propTypes = {
    anchorEl: PropTypes.object,
    setAnchorEl: PropTypes.func.isRequired,
    myProducts: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    openProductForm: PropTypes.func.isRequired,
}

const mapStateToprops = (state) => ({
    anchorEl: switchEditProfileMenu(state),
    myProducts: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
    setAnchorEl: value => dispatch(editProfileMenu(value)),
    getProducts : value => dispatch(fetchProducts(value)),
    openProductForm: value => dispatch(openProductForm(value)),
    openDeletePopup: value => dispatch(openDeletePopup(value))
});

export default connect(mapStateToprops, mapDispatchToProps)(ProfileContainer);