import React, {  useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const login = () => {

   const [error,seterror] =useState((''))
   const {signIn} = useContext(AuthContext)
   const navigate = useNavigate()

     const handleLogin=(e)=>{
        e.preventDefault(); 
        
               const email = e.target.email.value;
                 const pass = e.target.pass.value;
           // console.log(email,pass);
            signIn(email,pass).then(res => {
              console.log(res.user)
               toast("Welcome!");
               navigate(`${location.state?location.state : "/"}`)

            }).catch(err => {
              console.log(err)
              seterror('incorrect Email or pass')
               e.target.reset()
            })


     }
    return (
             <div className="flex justify-center items-center ">
              <title>Login</title>
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold text-center pt-6 text-2xl text-blue-500'>Login your account</h2>
      <form onSubmit={handleLogin}>
       < div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"name='email' required />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass' required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn bg-pink-300 text-white font-bold mt-4">Login</button>
          {
            error && <p className='text-red-600'>{error}</p>
          }
          <h1>Dont’t Have An Account ? <Link to='/auth/register' className='text-blue-600'>Register</Link></h1>
        </fieldset>
             <ToastContainer />
      </div>
      </form>
    </div>
  </div>
    );
};

export default login;