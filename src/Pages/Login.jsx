import React, {  useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const login = () => {

   const [error,seterror] =useState((''))
   const {signIn,forgetpass, google} = useContext(AuthContext)
   const navigate = useNavigate()
   const emailref = useRef()

     const handleLogin=(e)=>{
        e.preventDefault(); 
        
               const email = e.target.email.value;
                 const pass = e.target.pass.value;
           // console.log(email,pass);
            signIn(email,pass).then(() => {
             
               toast("Welcome!");
               navigate(`${location.state?location.state : "/"}`)

            }).catch(err => {
              console.log(err)
              seterror('incorrect Email or pass')
               e.target.reset()
            })
     }
     const handleforgetpass=()=>{
      console.log("clicked")

      const email=emailref.current.value
       if (!email) {
    toast.error("Please enter your Email first!");
    return;
  }
      forgetpass(email).then( ()=>{
        
         toast("please check your Email!");}
      ).catch(()=>{ toast.error("Failed to send reset email!");})
        

     }
      const googlehandle=()=>{
            google().then(()=>{
             toast.success("Successfully Registed!");
              navigate("/");
            }).catch((error) =>{
             console.log(error)
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
          <input type="email" className="input" placeholder="Email"name='email' ref={emailref} required />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass' required/>
          <div ><a className="link link-hover" onClick={handleforgetpass}>Forgot password?</a></div>
          <button type='submit' className="btn bg-pink-300 text-white font-bold mt-4">Login</button>
          {
            error && <p className='text-red-600'>{error}</p>
          }
          <h1>Dont’t Have An Account ? <Link to='/auth/register' className='text-blue-600'>Register</Link></h1>
        </fieldset>
             <ToastContainer />
      </div>
      </form>
      <button className="btn w-full bg-blue-50 hover:bg-blue-100 text-blue-700 flex items-center gap-2 border-blue-300 mb-4" onClick={googlehandle}>
               <img  src="https://www.svgrepo.com/show/355037/google.svg"  className="w-5 h-5"  /> Sign in with Google</button>
    </div>
  </div>
    );
};

export default login;