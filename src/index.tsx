import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import App from './components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

const isValidHTMLElement = (container: HTMLElement | null): container is HTMLElement => container !== null;

const container = document.getElementById('root');

if (!isValidHTMLElement(container)) throw new Error('No HTML Element with id root exists in document body.');

const root = createRoot(container);

root.render(
<Provider store={store}>
	<PersistGate
	loading={null}
	persistor={persistor} >
		<BrowserRouter>
			<Elements
			stripe={stripePromise}>
				<App />
			</Elements>
		</BrowserRouter>
	</PersistGate>
</Provider>
);


