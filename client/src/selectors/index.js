/* Libraries */
//import { createSelector } from 'reselect';

/* Selectors */
export const switchModal = (state) => state.myProducts.openModal;

export const getProducts = (state) => state.myProducts.products.listProducts;

export const getProductById = (state, props) => (
        state.myProducts.products.listProducts.find(c => props.products.find(p => c._id === p._id))
    );

export const switchPopup = (state) => state.profile.openDeletePopup;

export const switchPopupDelete = (state) => state.myProducts.deleteProduct;

export const switchEditProfileMenu = (state) => state.profile.editProfileMenu;

export const switchPopupProductForm = (state) => state.profile.openProductForm;

export const popupMessage = (state) => state.profile.popupMessage;