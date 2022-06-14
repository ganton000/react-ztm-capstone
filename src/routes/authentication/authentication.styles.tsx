import styled from 'styled-components';

export const AuthenticationContainer =
styled.div`
	display: flex;
	width: 900px;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 600px) {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 50px;
		width: 90vw;
		margin: 0 auto;
	}
`