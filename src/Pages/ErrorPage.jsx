import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      
            

            <div className="bg-linear-to-b from-pink-100 via-purple-100 to-blue-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-lg p-2 md:p-10 rounded-3xl shadow-2xl max-w-xl text-center border-4 border-blue-300">

        <img src="https://cdn-icons-png.flaticon.com/512/742/742751.png" alt="ToyPopia Error"  className=" w-15 md:w-32 mx-auto mb-6 drop-shadow-lg" />

        <h1 className=" text-xl md:text-5xl font-bold text-pink-500 mb-4"> Oops! Lost in Toy<span className='text-blue-500'>Popia</span></h1>

        <p className="text-pink-600 text-lg leading-relaxed mb-6"> Go back to Toy<span className='text-blue-500'>Popia</span> </p>

        <Link
          to="/"
          className="bg-blue-400 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold  text-[10px] md:text-lg shadow-md transition-all"
        >
          Back to Home
        </Link>

        <p className="text-sm text-pink-500 mt-6">
          Toy<span className='text-blue-500'>Popia</span> | Fun. Color. Joy.
        </p>
      </div>
    </div>
        
    );
};

export default ErrorPage;