import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import auth from './auth';
import alarm from './alram';

const router = createBrowserRouter([{
    path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [...auth, ...alarm],
}]);

export default router;