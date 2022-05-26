import React, { useContext } from "react";

import { CartContext } from '../../contexts/CartContext';


import {
	ShoppingIcon,
	CartIconContainer,
	ItemCount
} from './CartIcon.styles';

const CartIcon = () => {

	const { setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(prevState => !prevState);
	}

	//const totalQuantity = cartItems.reduce((acc, currEl) => acc + currEl.quantity, 0)

	return (
		<CartIconContainer
		onClick={toggleIsCartOpen}
		>
			<ShoppingIcon />
			<ItemCount>
				{/*{totalQuantity}*/}
				{cartCount}
			</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon;