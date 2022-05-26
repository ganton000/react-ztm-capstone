//Shrink lecture #99
import React from "react";

import {
	FormInputLabel,
	Input,
	Group
} from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => {

	return (
		<Group>
			<Input {...otherProps} />
			{ label && (
			<FormInputLabel
			shrink={otherProps.value.length}
			>
				{label}
			</FormInputLabel>
			)}
		</Group>
	)
};

export default FormInput;