import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './HomePage/Home/Home';
import Login from './HomePage/Login/Login';
import Register from './HomePage/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import EstateDetails from './HomePage/Estate/EstateDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Error from './Error/Error';
import UpdateProfile from './HomePage/UpdateProfile/UpdateProfile';
import UserProfile from './HomePage/UserProfile/UserProfile';
import Clients from './HomePage/Clients/Clients';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/hotels.json'),
      },
      {
        path: '/hotels/:id',
        element: <PrivateRoute>
          <EstateDetails></EstateDetails>,
        </PrivateRoute>,
        loader: () => fetch(`../hotels.json`)
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>,
      },
      {
        path: '/userProfile',
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>,
      },
      {
        path: '/clients',
        element: <PrivateRoute>
          <Clients></Clients>
        </PrivateRoute>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
