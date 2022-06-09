import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { selectCartTotal } from '../../store/cart/CartSelector';
import { selectCurrentUser } from '../../store/user/UserSelector';

import { BUTTON_TYPE_CLASSES }from '../button/Button';

import {
	PaymentFormContainer,
	FormContainer,
	PaymentButton
} from './PaymentForm.styles';

const PaymentForm = () => {
	//creates stripe instance to make requests
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		setIsProcessingPayment(true);

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: amount*100 })
		}).then(res => res.json())

		const clientSecret = response.paymentIntent.client_secret

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : ' Guest'
				}
			}
		})

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful')
			}
		}
	}

	return (
		<PaymentFormContainer>
			<FormContainer
			onSubmit={paymentHandler}
			>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<PaymentButton
				isLoading={isProcessingPayment}
				buttonType=			{BUTTON_TYPE_CLASSES.inverted}>
					Pay Now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	)
};

export default PaymentForm;