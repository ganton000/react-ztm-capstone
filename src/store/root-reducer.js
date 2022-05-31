import { combineReducers } from 'redux';

import { userReducer } from './user/UserReducer';
import { categoriesReducer } from './categories/CategoryReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer
});