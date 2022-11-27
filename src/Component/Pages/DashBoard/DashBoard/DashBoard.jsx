import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const DashBoard = () => {

    const { user } = useContext(AuthContext);
    // const [userFromDb, setUserFromDb] = useState(null);
    const [exampleUser] = useUser(user);
    // console.log("dashboard", exampleUser);


    if (!user?.uid) {
        return <LoadingSpinner />
    };



    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Dashboard <span className='text-orange-400'>||</span> Your Activity</h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Please note that, be aware to communicate with other seller , you should check seller information and products feedback/comment before. <strong className='text-orange-400'>Machine</strong> should be looks much clear in picture than actuate  real life.
                </p>

                <div className="flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">


                        {user?.uid &&
                            <>
                                <Link to="/dashboard/myOrders">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">My Orders</button>
                                </Link>
                            </>}

                        {(exampleUser?.role === "seller" || exampleUser?.role === "admin") &&
                            <>
                                <Link to="/dashboard/addProduct">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">Add a Product</button>
                                </Link>
                                <Link to="/dashboard/myProducts">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">My Products</button>
                                </Link>
                                <Link to="/dashboard/myBuyers">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">My Buyers</button>
                                </Link>
                            </>}


                        {exampleUser?.role === "admin" &&
                            <>
                                <Link to="/dashboard/allSeller">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">All Buyers</button>
                                </Link>
                                <Link to="/dashboard/allBuyer">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">All Sellers</button>
                                </Link>
                                <Link to="/dashboard/allAdmin">
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">All Admin</button>
                                </Link>
                            </>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;