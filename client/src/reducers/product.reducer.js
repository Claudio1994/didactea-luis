import { ADD_PRODUCT, PRODUCT_DELETED, OPEN_MODAL, UPDATE_SENT, GET_PRODUCTS } from '../constant';

const initialState = {
    products:{
        listProducts:[]
    },
    deleteProduct: '',
    openModal: {open: false}
};

export const product = (state = initialState, action ) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return {...state,
                products: {
                    listProducts: action.payload.products
                }
            }
        case PRODUCT_DELETED:
            let products = state.products.listProducts.filter((product) =>(product._id!==action.payload.productDB._id));
            
            return {
                ...state,
                deleteProduct: action.payload,
                products: {
                    listProducts: products
                }
            }
        case OPEN_MODAL: 
            return {
                ...state,
                openModal: action.payload
            }
        case UPDATE_SENT:
            let productsUpdated = state.products.listProducts.reduce((acc, product) => {
                if(product._id === action.payload._id){
                    return [ ...acc, action.payload]
                }else{
                    return [...acc, product]
                }
            }, []);


            return { 
                ...state,
                products: {
                    listProducts: productsUpdated
                }
            };

        case ADD_PRODUCT: 

            return {
                ...state,
                products: {
                    listProducts: [
                        ...state.products.listProducts,
                        action.payload
                    ]
                }
            }
        default: 
            return state;
    }
}