import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../../Pages/DashBoard/DashBoard/DashBoard';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const DashBoardLayOut = () => {


    return (
        <div>
            <div className="min-h-screen max-w-screen-2xl mx-auto bg-white dark:bg-gray-900">
                <Navbar />
                <div className='max-w-screen-2xl mx-auto px-4'>
                    <DashBoard />
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayOut;