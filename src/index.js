import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { UserProvider } from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/CartContext';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
<BrowserRouter>
	<UserProvider>
		<CategoriesProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</CategoriesProvider>
	</UserProvider>
</BrowserRouter>
);


