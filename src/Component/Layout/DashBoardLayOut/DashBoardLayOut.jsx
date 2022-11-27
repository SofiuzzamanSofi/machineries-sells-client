import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../../Pages/DashBoard/DashBoard';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const DashBoardLayOut = () => {


    return (
        <div>
            <div className="min-h-screen">
                <Navbar />
                <DashBoard />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayOut;