import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const MyProducts = () => {

    // user from firebase---
    const { user, noPhotFoundUrl } = useContext(AuthContext);
    // user from database -----
    const [currentUser] = useUser(user);
    // product from db of axios function ---
    const [products, setProducts] = useState("");
    console.log(products);


    // condtional loadin spinner -----
    if (!user?.uid && !currentUser) {
        return <LoadingSpinner />
    };




    useEffect(() => {
        if (currentUser?.role === "seller" || currentUser?.role === "admin") {
            axios.get(`http://localhost:5000/myProducts?email=${currentUser?.email}`)
                .then(data => {
                    // console.log(data?.data?.data);
                    setProducts(data?.data?.data);
                })
                .catch(error => console.log("error from my product page axios catch:", error))
        }
    }, []);



    return (
        <div className='dark:bg-gray-900  dark:text-white p-4'>
            <div >
                <p className='text-center text-3xl py-6'><strong className='text-orange-400'>{currentUser?.displayName}</strong>, You Have total: <strong className='text-orange-400'>{products?.length ? products?.length : 0}</strong> Products</p>
                <div className='flex gap-4'>
                    <img src={"https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg" || noPhotFoundUrl} alt="ProfilePhoto" className='h-14 w-14 rounded-full border border-rose-600' />
                    <p className='flex items-center'><span>Verified: </span> <span className='pl-6'>{currentUser?.sellerVerify ? <GoVerified className='text-blue-600' /> : ""} </span></p>
                </div>
                <div>
                    <p>Seller Name: {currentUser?.displayName}</p>
                    <p>Seller Email : {currentUser?.email}</p>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full dark:text-black dark:bg-black">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;