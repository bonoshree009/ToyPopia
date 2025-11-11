import React from 'react';
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../Provider/AuthProvider";

const Orders = () => {
      const { user } = useContext(AuthContext);

      const handlesubmit =(e)=>{
          e.preventDefault()
         toast("Successfully Order placed!");
         e.target.reset()
      
       }
    return (
        <div>
            
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-pink-500 mb-4">
        {user?.displayName}'s Orders
      </h1>

      <p className="text-gray-700">
        You haven't placed any orders yet. Start shopping now!


            <div className="card-body">
              <form onSubmit={handlesubmit}>
                  <fieldset className="fieldset"><h1 className='text-center text-2xl text-blue-300 font-bold'> Place Your Order</h1>
                  <label className="label">Toy-Name</label>
                  <input type="text" className="input" placeholder="Toy-name" required />
                  <label className="label">Quentity</label>
                  <input type="text" className="input" placeholder="quentity" required/>
                  <label className="label">Address</label>
                  <input type="text" className="input" placeholder="Your address" required/>
                  
                  <button className="btn bg-blue-400 text-white mt-4">Place Order</button>
                   <ToastContainer />
                </fieldset>
              </form>
              </div>
      </p>
        </div>
        </div>
    );
};

export default Orders;