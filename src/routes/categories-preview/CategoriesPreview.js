import React from "react";
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/CategorySelector';

import Spinner from '../../components/spinner/Spinner';
import CategoryPreview from '../../components/category-preview/CategoryPreview';


const CategoriesPreview = () => {

	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<React.Fragment>
			{ isLoading ? <Spinner /> : (
				Object.keys(categoriesMap).map(title => {
					const products = categoriesMap[title];
					return (
							<CategoryPreview
							key={title}
							title={title}
							products={products}
							/>);
			}))}
		</React.Fragment>
	)
};

export default CategoriesPreview;