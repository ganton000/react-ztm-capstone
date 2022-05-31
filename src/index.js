import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { CartProvider } from './contexts/CartContext';
import { Provider } from 'react-redux';
import { store } from './store/store';


import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
<Provider store={store}>
	<BrowserRouter>
		<CartProvider>
				<App />
		</CartProvider>
	</BrowserRouter>
</Provider>
);


