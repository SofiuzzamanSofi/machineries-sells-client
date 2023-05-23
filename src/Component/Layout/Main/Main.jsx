import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <div className="min-h-screen dark:bg-gray-900">
                <Navbar />
                <div className='max-w-screen-2xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white '>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main;