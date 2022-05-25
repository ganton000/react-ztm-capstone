import React, { useContext } from 'react';

import Button from '../button/Button';
import { CartContext } from '../../contexts/CartContext';

import './ProductCard.scss';

const ProductCard = ({ product }) => {

	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img
			src={imageUrl}
			alt={`${name}`}
			/>
			<div className='product-card-footer'>
				<span className='product-name'>
					{name}
				</span>
				<span className='product-price'>
					{price}
				</span>
			</div>
			<Button
			onClick={addProductToCart}
			buttonType='inverted'
			>
				ADD TO CART
			</Button>
		</div>
	)
};

export default ProductCard;