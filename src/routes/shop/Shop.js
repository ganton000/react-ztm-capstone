import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
	getCategoriesAndDocuments
} from '../../utils/firebase/firebase';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { fetchCategoriesStart } from '../../store/categories/CategoryAction';

const Shop = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		//redux-thunk now handles the async business logic
		dispatch(fetchCategoriesStart());
	  }, []);

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