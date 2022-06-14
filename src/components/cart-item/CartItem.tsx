import { FC, memo  } from 'react';

import { CartItem as TCartItem } from '../../store/cart/CartTypes';
import {
	CartItemContainer,
	ItemDetails
} from './CartItem.styles';

type CartItemProps = {
	cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {

	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CartItemContainer>
			<img
			src={imageUrl}
			alt={`${name}`}
			/>
			<ItemDetails>
				<span>{name}</span>
				<span>{quantity}</span>
				<span>{quantity} x ${price}</span>
			</ItemDetails>
		</CartItemContainer>
	)
});

export default CartItem;