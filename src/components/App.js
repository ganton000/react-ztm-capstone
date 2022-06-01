import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Shop from '../routes/shop/Shop';
import Home from '../routes/home/home';
import Navigation from '../routes/navigation/navigation';
import Checkout from '../routes/checkout/Checkout';
import Authentication from '../routes/authentication/authentication';
import { checkUserSession } from '../store/user/UserAction';


const App = () => {

	const dispatch = useDispatch();

	//Get User at the top level
	useEffect(()=> {
		dispatch(checkUserSession());
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