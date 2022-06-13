import { createSelector } from 'reselect';

import { RootState } from '../store';

import { CartState } from './CartReducer';

//get Cart Slice from Reducer
const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

//Memoize these states and reduce to update new state
export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity,
		0
	  )
);

//Memoize these states and reduce to update new state
export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	  )
);