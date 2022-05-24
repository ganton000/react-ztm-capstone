import React from 'react';

import './ProductCard.scss';
import Button from '../button/Button';

const ProductCard = ({ product }) => {

	const { name, price, imageUrl } = product;
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
			buttonType='inverted'
			>
				Add to cart
			</Button>
		</div>
	)
};

export default ProductCard;