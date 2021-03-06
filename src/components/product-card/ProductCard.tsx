import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { addItemToCart } from '../../store/cart/CartAction';
import { selectCartItems } from '../../store/cart/CartSelector';
import { CategoryItem } from '../../store/categories/CategoryTypes';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price
} from './ProductCard.styles';

type ProductCardProps = {
	product: CategoryItem;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { name, price, imageUrl } = product;

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<img
			src={imageUrl}
			alt={`${name}`}
			/>
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
			onClick={addProductToCart}
			buttonType={BUTTON_TYPE_CLASSES.inverted}
			>
				ADD TO CART
			</Button>
		</ProductCardContainer>
	)
};

export default ProductCard;