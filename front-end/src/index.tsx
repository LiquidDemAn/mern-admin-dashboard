import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
	// </React.StrictMode>
);
