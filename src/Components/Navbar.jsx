import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import userlogo from '../assets/user.png'
import { ToastContainer, toast } from 'react-toastify';
import Spinner from './Spinner';

const Navbar = () => {
    const {user,logOut} =useContext(AuthContext)
          
    const handlelogOut=()=>
      {
    console.log('user trying to logout')
    logOut().then(()=>{
        toast("Logged out. Come back soon!");
    }).catch(err => console.log(err))

    }
    return (
      
   <div className="navbar bg-base-100 shadow-sm p-3 md:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
       {user ? (<NavLink to="/profile">My Profile</NavLink> ) : (<NavLink to="/auth/login" className="text-blue-500 font-semibold"> My Profile</NavLink>
  )}
      </ul>
    </div>
    <a className="btn btn-ghost text-[15px] md:text-2xl text-blue-400">Toy<span className='text-pink-400'>Popia</span></a>
  </div>
 
  <div className="navbar-end">
     <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center">
       <li><NavLink to="/">Home</NavLink></li>
       <li>
     
       {user ? (<NavLink to="/auth/profile">My Profile</NavLink> ) : (<NavLink to="/auth/login" > My Profile</NavLink>) }</li>
     <li>
       {user && (<NavLink to="/auth/orders">Orders</NavLink>)}</li>

    </ul>
  </div>
  
    <div className='login-btn flex gap-1 md:gap-5 items-center'>
      
      <img src={`${user? user.photoURL : userlogo }`} alt=""  className=' w-8 md:w-12 rounded-full bg-gray-200 p-1'/>
    { user? ( (<button className='btn bg-blue-600 text-white text-[10px] md:text-xl' onClick={handlelogOut}>LogOut</button>)):
      (<button className='btn bg-pink-300 text-white text-[10px] md:text-xl'><NavLink to='/auth/login'>Login </NavLink></button>)}
 <ToastContainer />
     </div>
  </div>
</div>
    );
};

export default Navbar;