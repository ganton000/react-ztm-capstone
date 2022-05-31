import React from "react";
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/CategorySelector';
import CategoryPreview from '../../components/category-preview/CategoryPreview';


const CategoriesPreview = () => {

	const categoriesMap = useSelector(selectCategoriesMap);

	return (

		<React.Fragment>
			{
				Object.keys(categoriesMap).map(title => {
					const products = categoriesMap[title];
					return <CategoryPreview
							key={title}
							title={title}
							products={products}
							/>
			})}
		</React.Fragment>
	)
};

export default CategoriesPreview;