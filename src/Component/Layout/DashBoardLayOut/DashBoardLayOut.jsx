import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../../Pages/DashBoard/DashBoard/DashBoard';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const DashBoardLayOut = () => {


    return (
        <div>
            <div className="min-h-screen">
                <Navbar />
                <div className='max-w-screen-2xl mx-auto '>
                    <DashBoard />
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayOut;