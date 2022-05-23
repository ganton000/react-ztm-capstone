import React from "react";
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.scss';

const Navigation = () => {

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
					<Link
					className='nav-link'
					to='/auth'
					>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</React.Fragment>

	)
};

export default Navigation;