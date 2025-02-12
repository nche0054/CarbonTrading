import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TradingPage from './pages/component/Dashboard/TradingPage';
import Dashboard from './pages/component/Dashboard/Dashboard';
import EditBid from './pages/component/Dashboard/EditBid';
import ErrorPage from './pages/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TradingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/trading',
    element: <TradingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/editbid/:id',
    element: <EditBid />,
    errorElement: <ErrorPage />,
  }
]);
const App=() => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
