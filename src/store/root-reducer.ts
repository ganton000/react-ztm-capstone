import { combineReducers } from 'redux';

import { userReducer } from './user/UserReducer';
import { categoriesReducer } from './categories/CategoryReducer';
import { cartReducer } from './cart/CartReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer
});