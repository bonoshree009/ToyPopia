import React from 'react';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import { Outlet } from 'react-router';
import PopularToy from '../Components/PopularToy';
import WhyChooseUs from '../Components/WhyChosseUs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Slider></Slider> */}
            <PopularToy></PopularToy>
            <WhyChooseUs></WhyChooseUs>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;