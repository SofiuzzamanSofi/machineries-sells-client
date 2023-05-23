import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ButtonPublic from '../../Shared/ButtonPublic/ButtonPublic';

const DashBoard = () => {

    const { user } = useContext(AuthContext);
    // const [userFromDb, setUserFromDb] = useState(null);
    const [exampleUser] = useUser(user);
    // console.log("dashboard", exampleUser);


    // location pathname use for button active color changed ---
    const location = useLocation();
    // console.log(location?.pathname);



    // Link &  Button jsx component --- 
    const LinkAndButton = ({ to }) => {
        return (
            <Link to={`/dashboard/${to.replace(" ", "").toLowerCase()}`}
                className={`px-4 py-2 text-sm font-medium  capitalize transition-colors duration-300 lg:py-3  dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-md lg:px-12 ${location?.pathname?.toLowerCase() === `/dashboard/${to.replace(" ", "").toLowerCase()}` ? "bg-blue-600 text-white" : "text-blue-600 dark:text-blue-400"}`}
            >
                {to}
            </Link>
        );
    };

    if (!user?.uid) {
        return <LoadingSpinner />
    };




    return (
        <section className="">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Dashboard <span className='text-orange-400'>||</span> Your Activity</h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Please note that, be aware to communicate with other seller , you should check seller information and products feedback/comment before. <strong className='text-orange-400'>Machine</strong> should be looks much clear in picture than actuate  real life.
                </p>

                <div className="flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row items-center border border-blue-600 dark:border-blue-400 rounded-md">


                        {user?.uid &&
                            <>
                                {/* <LinkAndButton to="My Orders" /> */}
                                <Link to="/dashboard"
                                    className={`px-4 py-2 text-sm font-medium  capitalize transition-colors duration-300 md:py-3  dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-md md:px-12 ${location?.pathname?.toLowerCase() === `/dashboard` ? "bg-blue-600 text-white" : "text-blue-600 dark:text-blue-400"}`}
                                >
                                    My Orders
                                </Link>
                            </>}

                        {(exampleUser?.role === "seller" || exampleUser?.role === "admin") &&
                            <>
                                <LinkAndButton to="Add Product" />
                                <LinkAndButton to="My Products" />
                                <LinkAndButton to="My Buyers" />
                            </>}


                        {exampleUser?.role === "admin" &&
                            <>
                                <LinkAndButton to="All Buyer" />
                                <LinkAndButton to="All Seller" />
                                <LinkAndButton to="All Admin" />
                            </>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;