import React from 'react';

import {
	SpinnerContainer,
	SpinnerOverlay
} from './Spinner.styles.jsx';

const Spinner = () => {

	return (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	)
};


export default Spinner;