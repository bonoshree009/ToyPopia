import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        
           <div className='bg-blue-200 min-h-screen '>
         
           <Navbar></Navbar>
        
          <main className='w-11/12 mx-auto pt-10'><Outlet></Outlet></main>
          <Footer></Footer>
        </div>

    );
};

export default AuthLayout;