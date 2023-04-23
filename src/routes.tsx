import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'game/:id',
				element: <GameDetailPage />,
			},
		],
	},
]);

export default router;