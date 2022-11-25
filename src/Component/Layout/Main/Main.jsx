import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';
import Navbar from '../../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Navbar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Main;