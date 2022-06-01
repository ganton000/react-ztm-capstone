import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase';

import FormInput from '../form-input/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { googleSignInStart, emailSignInStart } from '../../store/user/UserAction';

import {
	SignInContainer,
	ButtonsContainer
} from './SignInForm.styles';

const defaultFormFields = {
	email: '',
	password: ''
};

const SignInForm = () => {

	const dispatch = useDispatch();

	const [formFields, setFormFields] = useState(defaultFormFields);

	const { email, password } = formFields;
;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password))

			resetFormFields();
		} catch (err) {

			switch(err.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;

				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(err)
			}
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form
			onSubmit={handleSubmit}
			>
				<FormInput
				label="email"
				type="email"
				value={email}
				name="email"
				onChange={handleChange}
				required
				/>
				<FormInput
				label="password"
				type="password"
				value={password}
				name="password"
				onChange={handleChange}
				required
				/>
				<ButtonsContainer>
					<Button type="submit">
						SIGN IN
					</Button>
					<Button
					buttonType={BUTTON_TYPE_CLASSES.google}
					type='button'
					onClick={signInWithGoogle}
					>
						GOOGLE SIGN IN
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	)
};

export default SignInForm;