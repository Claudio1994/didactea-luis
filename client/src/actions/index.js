import axios from 'axios';
import { GET_PRODUCTS, EDIT_PROFILE_MENU, UPDATE_SENT, OPEN_PRODUCT_FORM, OPEN_DELETE_POPUP,
    PRODUCT_DELETED, OPEN_MODAL, MESSAGE_UPDATE, ADD_PRODUCT, USER_LOGIN } from '../constant/';

import history from '../router/history';

const getProducts = payload => ({type: GET_PRODUCTS, payload});

export const fetchProducts = payload => {
    return( (dispatch) => {
        
        axios.get('/api/product/')
        .then((data)=>{
            dispatch(getProducts(data.data));
        })
        .catch((error) =>{
        console.log(error);
        });

    });
}

export const editProfileMenu = payload => ({type: EDIT_PROFILE_MENU, payload});

export const openProductForm = payload => ({type: OPEN_PRODUCT_FORM, payload});

export const openModal = payload => ({type: OPEN_MODAL, payload});


const updateSent = payload => ({type: UPDATE_SENT, payload});

export const messageUpdate = payload => ({type: MESSAGE_UPDATE, payload})

export const sendOpenEdit = payload =>{
    return ( (dispatch) => {
        axios.put('api/product/update', {
            id: payload._id,
            name: payload.name,
            description: payload.description,
            image: payload.image
        })
        .then(data =>{
            dispatch(updateSent(data.data.product));

            let message = {
                ok: data.data.ok,
                open: true,
                message: data.data.message
            };
            
            dispatch(messageUpdate(message));
        })
        .catch(error =>{
            console.log(error.response.data);
            let message = {
                ok: error.response.data.ok,
                open: true,
                message: error.response.data.error.message
            };
            dispatch(messageUpdate(message));
        });
    });
}

export const openDeletePopup = payload => ({type: OPEN_DELETE_POPUP, payload})

export const deleteProduct = payload => {
    console.log(payload)
    return ((dispatch) => {
        axios.delete(`/api/product/delete/${payload}`,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            dispatch(productDeleted(data.data));
            dispatch(openDeletePopup({open: false, product: {}}));
            let message = {
                ok: data.data.ok,
                open: true,
                message: data.data.message
            };

            dispatch(messageUpdate(message));
        })
        .catch((error) =>{

            let message = {
                ok: error.response.data.ok,
                open: true,
                message: error.response.data.error.message
            };
            dispatch(messageUpdate(message));
        })
    });
}

const productDeleted = payload => ({type: PRODUCT_DELETED,payload});

export const postProductForm = payload => {
    return ( (dispatch) => {
        axios.post('/api/product/create', {
            name: payload.name,
            description: payload.description,
            image: payload.image            
        
        }).then((data) => {
            dispatch(addProduct(data.data.product));

            let message = {
                ok: data.data.ok,
                open: true,
                message: data.data.message
            };

            dispatch(messageUpdate(message));
        }).catch((error) => {
            let message = {
                ok: error.response.data.ok,
                open: true,
                message: error.response.data.error.message
            };
            dispatch(messageUpdate(message));
        });
    });
}

const addProduct = payload => ({type: ADD_PRODUCT, payload});

export const sendLogin = payload => {
    return ( (dispatch) => {
        axios.post('/api/login', {
            email: payload.email,
            password: payload.password
        }).then((data) => {
            dispatch(userLogin(data.data));
            history.push('/profile');
            //dispatch(messageUpdate({ok: true, open: true, message: 'Ha iniciado sesión correctamente'}));
        }).catch((error)=> {
            dispatch(messageUpdate({ok: false, open: true, message: error.response.data.error.message}));
        })
    });
}

const userLogin = payload => ({type: USER_LOGIN, payload});





