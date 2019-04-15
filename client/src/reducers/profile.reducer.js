import { EDIT_PROFILE_MENU, OPEN_PRODUCT_FORM, OPEN_DELETE_POPUP,
    MESSAGE_UPDATE } from '../constant';

const initialState = {
    editProfileMenu: null,
    openProductForm: {
        open: false,
        product: {},
        type: {
            title: '',
            message: ''
        }
    },
    openDeletePopup: {
        open: false,
        product: {
            name: ''
        }
    },
    popupMessage: {
        open: false,
        message: '',
        ok: ''
    }
};

export const profile = (state= initialState, action) =>{
    switch(action.type){
        case EDIT_PROFILE_MENU:
            return {
                ...state,
                editProfileMenu: action.payload
            }
        case OPEN_PRODUCT_FORM:
            return {...state,
                openProductForm: action.payload
            }
        case OPEN_DELETE_POPUP:
            return { ...state,
                openDeletePopup: action.payload
            }
        case MESSAGE_UPDATE:
            return {
                ...state,
                popupMessage: action.payload
            }
        default:
            return state;
    }
}

