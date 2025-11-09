import React   from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from './ToyCard';


const PopularToy = () => {
    
    const Alltoy = useLoaderData()
    
    
   // console.log(Alltoy)
    return (
        <div>
            <h1 className='text-4xl text-center font-bold pb-10 text-pink-400'>popular <span className='text-blue-500'>Toys</span></h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-24 mb-8'> 
            {
                Alltoy.map(toy => <ToyCard toy={toy} key={toy.id}></ToyCard>)
            }
            
            </div>
        </div>
    );
};

export default PopularToy;