import React, { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

export const CategoriesContext = createContext({
	categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {

	const [categoriesMap, setCategoriesMap] = useState({});

	const value = { categoriesMap };

	useEffect(() => {

		//to use async within useEffect, must be
		//used as a callback.
		const getCategoriesMap = async () => {

			const categoryMap = await getCategoriesAndDocuments()

			setCategoriesMap(categoryMap);
		}

		getCategoriesMap();
	}, []);

	//useEffect(() => {

	//	//categories -> name of collection
	//	addCollectionAndDocuments('categories', SHOP_DATA);
	//}, [])

	return (
		<CategoriesContext.Provider
		value={value}
		>
			{children}
		</CategoriesContext.Provider>
	)
}