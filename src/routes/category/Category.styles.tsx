import styled from 'styled-components';

export const CategoryContainer =
styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 25px;
		margin: 0 30px 0 3px;
		}

	@media screen and (max-width: 400px) {
		display: grid;
		grid-template-columns: 1fr;
		margin: 0 15px 0 15px;
		}
`

export const Title =
styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`