//Note to self:
//can use handleChange and value attribute
//instead of useEffect to update state
import React, { useState } from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
 } from '../../utils/firebase/firebase';

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

	const [formFields, setFormFields] = useState(defaultFormFields)

	const { displayName, email, password, confirmPassword } = formFields;


	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		if ( password !== confirmPassword ) {
			alert('passwords do not match');
			return;
		};

		try {
			const { user }= await createAuthUserWithEmailAndPassword(email, password);


			//AuthWithEmail doesn't return displayName so must manually add.
			await createUserDocumentFromAuth(user, { displayName });

			//once userDoc successfully created
			resetFormFields();

		} catch (err) {

			if (err.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', err);
			}
		}

	};


	const handleChange = event => {
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
				minLength="8"
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