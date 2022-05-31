import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
	getCategoriesAndDocuments
} from '../../utils/firebase/firebase';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { setCategories } from '../../store/categories/CategoryAction';

const Shop = () => {

	const dispatch = useDispatch();

	useEffect(() => {

		const getCategoriesMap = async () => {

		  const categoriesArray = await getCategoriesAndDocuments('categories');

		dispatch(setCategories(categoriesArray));
		};
		getCategoriesMap();
	  }, [dispatch]);

	return (
			<Routes>
				<Route index
				element=			{<CategoriesPreview />}/>
				<Route path=":category"
				element={<Category />}/>
			</Routes>
	)
};

export default Shop;