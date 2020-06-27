import {combineReducers} from 'redux';
//import postReducer from'./postReducer';
import productReducer from'./productReducer';
import cartReducer from'./cartReducer';

export default combineReducers({
    products:productReducer,
    cart:cartReducer
})
