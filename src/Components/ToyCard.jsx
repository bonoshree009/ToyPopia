import React from 'react';
import { NavLink } from 'react-router';

const ToyCard = ({toy}) => {
    

    return (
       <div className="p-4 rounded-xl shadow-lg  bg-pink-100">
      <img
        src={toy.thumbnail}
        className="w-full h-56 object-cover rounded-lg"
        alt={toy.toyName}
      />

      <h3 className="text-lg font-semibold mt-3">{toy.toyName}</h3>

      <p className="text-sm">⭐ Rating: {toy.rating}</p>
      <p className="text-sm">Available: {toy.availableQuantity}</p>
      <p className="text-sm font-bold">৳ {toy.price}</p>

      <button className="btn bg-blue-300 text-white btn-sm mt-3" ><NavLink to={`/toydetalis/${toy.id}`}>View More</NavLink></button>
    </div>
    );
};

export default ToyCard;