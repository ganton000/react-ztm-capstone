import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';

import { selectCategoriesMap } from '../../store/categories/CategorySelector'

import { Title, CategoryContainer } from './Category.styles.jsx';

const Category = () => {

	//returns object
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {

		setProducts(categoriesMap[category])
		//rather than assign products = categoriesMap[category], this will only re-render whenever changes happen to categoriesMap (or category)
	}, [category, categoriesMap]);

	return (

		<React.Fragment>
			<Title>
				{category.toUpperCase()}
			</Title>
			<CategoryContainer>
				{/* Conditional render incase products undefined */}
				{products &&
				products.map(product => (
					<ProductCard
					key={product.id}
					product={product}
					/>
					))
				}
			</CategoryContainer>
		</React.Fragment>
		)
};


export default Category;