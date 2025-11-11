import React , {  useContext} from 'react';
import { Link , Navigate, useNavigate} from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const {createuser,updateuser,setuser} =useContext(AuthContext)
    
    const navigate = useNavigate()
    const handleregister=(e)=>{
          e.preventDefault(); 
              const name = e.target.name.value;
         const photo = e.target.photo.value;
           const email = e.target.email.value;
             const pass = e.target.pass.value;
       // console.log(name,photo,email,pass);


          const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         if(!passwordPattern.test(pass)){
    toast.error('Your password must be at least 6 characters with one uppercase and one lowercase letter');
            return
           }
        createuser(email,pass).then(res =>{
            const user = res.user
           updateuser({displayName:name, photoURL: photo})
       .then(()=>{
      setuser({...user,displayName:name,photoURL: photo})
       navigate("/")
       toast.success("Successfully Registed!");
       }).catch((error) =>{
        console.log(error)
        setuser(user)
       })
       
      }).catch(err => console.log(err))


    }
    return (
         <div>
             <div className="flex justify-center items-center ">
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold text-center pt-6 text-2xl text-pink-400'>Register your account</h2>
      <form onSubmit={handleregister}>
        <div className="card-body">
        <fieldset className="fieldset">
             <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name here" name='name' />
           <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="enter your photo url" name='photo'/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' required/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass' required/>
        
          <button  type="submit" className="btn bg-blue-400 text-white mt-4">Register</button>
          <h1>Already Have An Account ? <Link to='/auth/Login' className=' text-pink-600'>Login</Link></h1>

         
             <ToastContainer />
        </fieldset>
      </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default Register;