import React from 'react';
import Advertised from '../../Pages/Home/Advertised';
import Categories from '../../Pages/Home/Categories';
import Slider from '../../Pages/Home/Slider';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Advertised />
            <Categories />
            <Footer />
        </div>
    );
};

export default Main;