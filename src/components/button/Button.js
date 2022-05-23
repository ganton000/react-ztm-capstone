import React from "react";

import './Button.scss';

//Determines className for button styling
const BUTTON_TYPE_CLASSNAMES = {
	google: 'google-sign-in',
	inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {

	return (
		<button
		className={`button-container ${BUTTON_TYPE_CLASSNAMES[buttonType]}`}
		{...otherProps}
		>
			{children}
		</button>
	)
};

export default Button;