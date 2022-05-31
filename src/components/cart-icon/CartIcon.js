import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { selectIsCartOpen, selectCartCount } from '../../store/cart/CartSelector';
import { setIsCartOpen } from '../../store/cart/CartAction';


import {
	ShoppingIcon,
	CartIconContainer,
	ItemCount
} from './CartIcon.styles';

const CartIcon = () => {

	//to dispatch the action creator
	const dispatch = useDispatch();

	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	}

	//const totalQuantity = cartItems.reduce((acc, currEl) => acc + currEl.quantity, 0)

	return (
		<CartIconContainer
		onClick={toggleIsCartOpen}
		>
			<ShoppingIcon />
			<ItemCount>
				{cartCount}
			</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon;