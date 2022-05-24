import React, { useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown  from "../../components/cart-dropdown/CartDropdown";

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase';

import './navigation.scss';

const Navigation = () => {

	//retrieve currentUser from Context
	const { currentUser  } = useContext(UserContext);

	const { isCartOpen } = useContext(CartContext);

	return (
		<React.Fragment>
			<div className='navigation'>
				<Link
				className='logo-link'
				to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div
				className='nav-links-container'
				>
					<Link
					className='nav-link'
					to='/shop'
					>
						SHOP
					</Link>
					{ currentUser ? (
						<span
						onClick={signOutUser}
						className="nav-link">
							SIGN OUT
						</span>) :
						(<Link
						className='nav-link'
						to='/auth'
						>
							SIGN IN
						</Link>)
					}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</React.Fragment>

	)
};

export default Navigation;