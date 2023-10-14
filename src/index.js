import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n} defaultNS={'translation'}>
			<Provider store={store}>
				<Router basename={process.env.PUBLIC_URL}>
					<App />
				</Router>
			</Provider>
		</I18nextProvider>
	</React.StrictMode>,
);
