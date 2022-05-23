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
import './SignUpForm.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {

	const [formFields, setFormFields] = useState(defaultFormFields)

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

	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = event => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value
		})
	};

	return (
		<div
		className="sign-up-container">
			<h2>
				Don't have an account?
			</h2>
			<span>Sign up with your email and password</span>
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
		</div>
	)
};


export default SignUpForm;