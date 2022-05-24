import React, { useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';

import './navigation.scss';

const Navigation = () => {

	//retrieve currentUser from Context
	const { currentUser  } = useContext(UserContext);

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
				</div>
			</div>
			<Outlet />
		</React.Fragment>

	)
};

export default Navigation;