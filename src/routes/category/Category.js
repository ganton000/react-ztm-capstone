import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';
import Spinner from '../../components/spinner/Spinner';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/CategorySelector'

import { Title, CategoryContainer } from './Category.styles.jsx';

const Category = () => {

	//returns object
	const { category } = useParams();
	const isLoading = useSelector(selectCategoriesIsLoading);
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
			{
				isLoading ? <Spinner /> : (
				<CategoryContainer>
					{products &&
					products.map(product => (
						<ProductCard
						key={product.id}
						product={product}
						/>
					))}
			</CategoryContainer>
			)}
		</React.Fragment>
		)
};


export default Category;