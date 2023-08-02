import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from './routes/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<HomeRoutes />
		</BrowserRouter>
	</React.StrictMode>,
);
