import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkUserSession } from '../store/user/UserAction';
import Spinner from '../components/spinner/Spinner';

//Dynamic import
//const Home = await import('../routes/home/home');

//Synonymous dynamic import via React
const Home = lazy(() => import('../routes/home/home'));
const Shop = lazy(() => import('../routes/shop/Shop'));
const Navigation = lazy(() => import('../routes/navigation/navigation'));
const Checkout = lazy(() => import('../routes/checkout/Checkout'));
const Authentication = lazy(() => import('../routes/authentication/authentication'));

const App = () => {

	const dispatch = useDispatch();

	//Get User at the top level
	useEffect(()=> {
		dispatch(checkUserSession());
	}, []);

	return (
		<Suspense fallback={<Spinner />}>
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
		</Suspense>
	)

};

export default App;