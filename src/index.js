import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { UserProvider } from './contexts/UserContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
<BrowserRouter>
	<UserProvider>
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
	</UserProvider>
</BrowserRouter>
);


