import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Navbar />
                <div className='max-w-screen-2xl mx-auto '>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main;