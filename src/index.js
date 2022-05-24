import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './components/App';
import { UserProvider } from './contexts/UserContext';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
<UserProvider>
	<App />
</UserProvider>
);


