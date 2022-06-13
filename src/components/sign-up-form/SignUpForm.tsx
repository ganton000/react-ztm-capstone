//Note to self:
//can use handleChange and value attribute
//instead of useEffect to update state
import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';

 import { signUpStart } from '../../store/user/UserAction';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { SignUpContainer } from './SignUpForm.styles';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {

	const dispatch = useDispatch();

	const [formFields, setFormFields] = useState(defaultFormFields)

	const { displayName, email, password, confirmPassword } = formFields;


	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if ( password !== confirmPassword ) {
			alert('passwords do not match');
			return;
		};

		try {
			dispatch(signUpStart(email, password, displayName));
			//once userDoc successfully created
			resetFormFields();

		} catch (error) {

			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}

	};


	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value
		})
	};

	return (
		<SignUpContainer>
			<h2>
				Don't have an account?
			</h2>
			<SignUpContainer as='span'>
				Sign up with your email and password
			</SignUpContainer>
			<form
			onSubmit={handleSubmit}
			>
				<FormInput
				label="Display Name"
				type="text"
				name="displayName"
				value={displayName}
				onChange={handleChange}
				required />
				<FormInput
				label="Email"
				type="email"
				name="email"
				value={email}
				onChange={handleChange}
				required />
				<FormInput
				label="Password"
				type="password"
				name="password"
				minLength={8}
				value={password}
				onChange={handleChange}
				required />
				<FormInput
				label="Confirm Password"
				type="password"
				name="confirmPassword"
				value={confirmPassword}
				onChange={handleChange}
				required />
				<Button
				type="submit"
				>
					SIGN UP
				</Button>
			</form>
		</SignUpContainer>
	)
};


export default SignUpForm;