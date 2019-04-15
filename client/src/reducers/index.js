import { combineReducers } from 'redux';
import { product } from './product.reducer';
import { profile } from './profile.reducer';
import { reducer as reduxForm } from 'redux-form';
import { user } from './user.reducer';

export default combineReducers({
    myProducts: product,
    profile,
    form: reduxForm,
    user
});