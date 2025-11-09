import React from 'react';
import { FaRegHandshake, FaShieldAlt, FaRocket } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaRegHandshake className="text-4xl text-pink-500 mb-4" />,
            title: "Trusted & Reliable",
            description: "We provide trusted and reliable services ensuring complete customer satisfaction."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-blue-500 mb-4" />,
            title: "Secure & Safe",
            description: "Your data and privacy are our top priorities. Safety and security guaranteed."
        },
        {
            icon: <FaRocket className="text-4xl text-green-500 mb-4" />,
            title: "Fast & Efficient",
            description: "Experience fast and efficient service with our expert team working round the clock."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold text-blue-400 mb-6">
                    Why <span className="text-pink-500">Choose Us</span>
                </h2>
                <p className="text-gray-600 mb-12">
                    We are committed to providing the best service for our customers with quality, trust, and efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            {feature.icon}
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
