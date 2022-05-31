import React, { useEffect } from 'react';
//Hooks our action creator and dispatches it.
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';


import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth
} from '../utils/firebase/firebase';

import Shop from '../routes/shop/Shop';
import Home from '../routes/home/home';
import Navigation from '../routes/navigation/navigation';
import Checkout from '../routes/checkout/Checkout';
import Authentication from '../routes/authentication/authentication';
import { setCurrentUser } from '../store/user/UserAction';


const App = () => {

	//This dispatches action to rootReducer,
	//which passes the action to every reducer function
	const dispatch = useDispatch();

	//Get User at the top level
	useEffect(()=> {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			};
			dispatch(setCurrentUser(user));
		});

		//unmounts via the unsubscribe func
		return unsubscribe;
	}, []);

	return (
		<Routes>
			<Route
			path='/' element={<Navigation />}>
				<Route
				index element={<Home />}
				/>
				<Route
				path='shop/*' element={<Shop />}
				/>
				<Route path='auth' element={<Authentication />}
				/>
				<Route path='checkout' element={<Checkout />}
				/>
			</Route>
		</Routes>
	)

};

export default App;