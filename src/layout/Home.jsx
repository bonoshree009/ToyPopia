import React from 'react';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import { Outlet } from 'react-router';
import PopularToy from '../Components/PopularToy';
import WhyChooseUs from '../Components/WhyChosseUs';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <title>Toypopia-Home</title>
            <Navbar></Navbar>
             <Slider></Slider> 
            <PopularToy></PopularToy>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
            <Footer></Footer>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;