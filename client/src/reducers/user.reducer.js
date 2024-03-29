import { USER_LOGIN } from '../constant';

const initialState = {}

export const user = (state= initialState, action) => {
    switch(action.type){
        case USER_LOGIN: 
            return({...state,
                'user' : action.payload});
        default: 
            return state;
    }
}