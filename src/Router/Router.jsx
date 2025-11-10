import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../layout/Home';
import Toydetails from '../layout/Toydetails';
import Spinner from '../Components/Spinner';
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import AuthLayout from '../layout/AuthLayout';
import PrivateRroute from '../Provider/PrivateRoute';




export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner></Spinner>}>
        <Home />
      </Suspense>
    ),
    loader: async () => {
       await new Promise(resolve => setTimeout(resolve, 2000));
      const res = await fetch("/popularToy.json");
      return res.json();
    }
  },

  {
    path: "/toydetalis/:id",
    element: (
      <Suspense fallback={<p>loading</p>}>
      <PrivateRroute>  <Toydetails /></PrivateRroute>
      </Suspense>
    ),
    loader: async () => {
      const res = await fetch("/toyDetails.json");
      return res.json();
    }
  },
  {

    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
    path:'/auth/login',
    element: <Login></Login>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      }
    ]
  }
]);
