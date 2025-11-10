import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        
           <div className='bg-blue-200 min-h-screen '>
         
           <Navbar></Navbar>
        
          <main className='w-11/12 mx-auto pt-10'><Outlet></Outlet></main>
        </div>

    );
};

export default AuthLayout;