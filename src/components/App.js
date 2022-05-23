import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../routes/home/home';
import Navigation from '../routes/navigation/navigation';
import Authentication from '../routes/authentication/authentication';

const Shop = () => {

	return (
		<div>
			Shop page
		</div>
	)
}

const App = () => {

	return (

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />}/>
					<Route
					path='shop'
					element={<Shop />}/>
					<Route
					path='auth'
					element={<Authentication />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)

};

export default App;