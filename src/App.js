import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TradingPage from './pages/component/Trading/TradingPage.jsx';
import Dashboard from './pages/component/Dashboard/Dashboard.jsx';
import PortfolioPage from './pages/component/Portfolio/PortfolioPage.jsx';
import EditBid from './pages/component/Trading/EditBid.jsx';
import ErrorPage from './pages/Error/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <TradingPage />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
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
