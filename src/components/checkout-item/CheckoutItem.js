import React, { useContext } from "react";

import { CartContext } from '../../contexts/CartContext';

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Value,
	Arrow,
	RemoveButton
} from './CheckoutItem.styles';


const CheckoutItem = ({ cartItem }) => {

	const { imageUrl, name, price, quantity } = cartItem;

	const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img
				src={imageUrl}
				alt={`${name}`}
				/>
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow
				onClick={removeItemHandler}
				>
					&#10094;
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow
				onClick={addItemHandler}
				>
					&#10095;
				</Arrow>
			</Quantity>
			<BaseSpan>{price*quantity}</BaseSpan>
			<RemoveButton
			onClick={clearItemHandler}
			>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	)
}

export default CheckoutItem;