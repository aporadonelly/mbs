import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import products from './ProductsReducer';

export default combineReducers({
    auth: AuthReducer,
    products
});
