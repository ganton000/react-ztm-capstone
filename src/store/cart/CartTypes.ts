import { CategoryItem } from '../categories/CategoryTypes';

export enum CART_ACTION_TYPES {
	SET_CART_ITEMS = 'SET_CART_ITEMS',
	SET_IS_CART_OPEN = 'SET_IS_CART_OPEN'
};

//CategoryItem => productToAdd within addCartItem action.
export type CartItem = CategoryItem & {
	quantity: number;
};
