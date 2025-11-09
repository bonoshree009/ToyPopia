import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Anika Rahman",
        quote: "My kids love ToyPopia! Fast delivery and amazing toys.",
        rating: 5
    },
    {
        id: 2,
        name: "Rafi Ahmed",
        quote: "Great variety of toys and very friendly customer service.",
        rating: 4
    },
    {
        id: 3,
        name: "Sohana Karim",
        quote: "Excellent experience! My children are very happy.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-pink-400 mb-8">What Our <span className='text-blue-400'>Customers Say</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                            <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                            <div className="flex justify-center mb-2">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>
                            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
