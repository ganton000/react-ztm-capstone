import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown  from "../../components/cart-dropdown/CartDropdown";

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase';

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink
} from './navigation.styles';

const Navigation = () => {

	//retrieve currentUser from Context
	const { currentUser  } = useContext(UserContext);

	const { isCartOpen } = useContext(CartContext);

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
					{ currentUser ? (
						<NavLink as='span'
						onClick={signOutUser}>
							SIGN OUT
						</NavLink>) :
						(<NavLink
						to='/auth'
						>
							SIGN IN
						</NavLink>)
					}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</React.Fragment>

	)
};

export default Navigation;