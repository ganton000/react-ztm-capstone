import React from "react";
import { Outlet } from 'react-router-dom';
//Allows to interact with components from redux store
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown  from "../../components/cart-dropdown/CartDropdown";

import { selectIsCartOpen } from '../../store/cart/CartSelector';
import { selectCurrentUser } from '../../store/user/UserSelector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutStart } from '../../store/user/UserAction';

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink
} from './navigation.styles';

const Navigation = () => {

	const dispatch = useDispatch();

	//Selector function extracts value that you want
	//from the Redux store.
	//Selector updates whenever state object changes (due to Redux)
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutUser = () => dispatch(signOutStart())

	return (
		<React.Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink
					to='/shop'
					>
						SHOP
					</NavLink>
					{currentUser ? (
						<NavLink as='span'
						onClick={signOutUser}>
							SIGN OUT
						</NavLink>):
						(<NavLink
						to='/auth'
						>
							SIGN IN
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</React.Fragment>

	)
};

export default Navigation;