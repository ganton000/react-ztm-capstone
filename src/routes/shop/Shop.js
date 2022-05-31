import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
	getCategoriesAndDocuments
} from '../../utils/firebase/firebase';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { setCategoriesMap } from '../../store/categories/CategoryAction';

const Shop = () => {

	const dispatch = useDispatch();

	useEffect(() => {

		const getCategoriesMap = async () => {
		  const categoryMap = await getCategoriesAndDocuments('categories');
		  dispatch(setCategoriesMap(categoryMap));
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