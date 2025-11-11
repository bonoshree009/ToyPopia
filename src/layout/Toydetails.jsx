import React from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Components/Footer';

const Toydetails = () => {
       const Alltoydetails = useLoaderData()
        // console.log(Alltoy)
     const {id} = useParams()
 const details =Alltoydetails.find(toy => toy.toyId === parseInt(id))
 const handlesubmit =(e)=>{
    e.preventDefault()
   toast("Successfully submit the form!");
   e.target.reset()

 }
     
    return (
        <div>
            <Navbar></Navbar>
              
        <div className="flex flex-col md:flex-row bg-pink-100 shadow-lg rounded-lg overflow-hidden my-10  mx-5 md:mx-20">
  
          <div className="md:w-1/3 p-4">
            <img src={details.pictureURL} alt={details.toyName}className="w-full h-64 object-cover" />
          </div>

      {/* Right side: Info */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{details.toyName}</h2>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Seller:</span> {details.sellerName}</p>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> {details.sellerEmail}</p>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Category:</span> {details.subCategory}</p>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Price:</span> ${details.price}</p>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Rating:</span> {details.rating}</p>
          <p className="text-gray-700 mb-3"><span className="font-semibold">Available Quantity:</span> {details.availableQuantity}</p>
          <p className="text-gray-600">{details.description}</p>
        </div>
      </div>
    </div>
 
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5 mx-5 md:mx-20">
      <div className="card-body">
      <form onSubmit={handlesubmit}>
          <fieldset className="fieldset"><h1 className='text-center text-2xl text-blue-300 font-bold'> Try Now toy</h1>
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" required />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" required/>
          
          <button className="btn bg-blue-400 text-white mt-4">Try Now</button>
           <ToastContainer />
        </fieldset>
      </form>
      </div>
    </div>    
     <Footer></Footer>
           
        </div>
    );
};

export default Toydetails;