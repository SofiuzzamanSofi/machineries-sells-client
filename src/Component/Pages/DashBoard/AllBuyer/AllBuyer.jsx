import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import ButtonPublic from '../../Shared/ButtonPublic/ButtonPublic';

const AllBuyer = () => {

    // user from firebase--
    const { user, noImageFoundUrl } = useContext(AuthContext);
    // user from database with role --admin/seller/etc---
    const [currentUser] = useUser(user);
    const navigate = useNavigate();

    // load Advertised from react query ---
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/user/all");
            const data = await res.json();
            if (data?.success) {
                return data.data;
            } else { return data.success };
        },
    });
    // console.log(data);

    const handleDeleteUser = id => {
        // console.log(id);
        if (!(currentUser?.role === "admin")) {
            return toast.error(`Dear ${currentUser?.displayName} only admin delete someone.`);
        };
        axios.delete(`http://localhost:5000/user/${id}`)
            .then(data => {
                if (data?.data?.data?.acknowledged) {
                    refetch();
                    toast.success(data?.data?.message);
                }
            })
            .catch(error => console.log("error from delete buyer axios catch:", error))
    }



    return (
        <div className='dark:bg-gray-900  dark:text-white p-4'>
            <p className='text-center py-4 font-bold text-4xl'>This is All Buyer page</p>
            <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium underline">Your(seller) Personal Inormation</p>
                <div className='grid gap-4'>
                    <p className="text-sm">Profile Photo</p>
                    <div className="flex items-center space-x-2">
                        <img src={user?.photoURL || noImageFoundUrl} alt="phot" className="w-10 h-10 rounded-full bg-black dark:bg-base-200" />
                        <button disabled type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">{currentUser?.displayName}</button>
                    </div>
                    <p ><span>Email: {currentUser?.email}  </span></p>
                    <p className=''> <span className=''>You are: Admin </span></p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full  dark:text-black dark:bg-black">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Info</th>
                                <th>Access</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* table map ---- */}
                            {data && data.map((seller, index) => <tr key={seller._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{seller?.displayName}</td>
                                <td>
                                    <p>{seller?.email}</p>
                                    <p>User Type: {seller?.role ? seller?.role : "user/buyer"} </p>
                                    {seller?.sellerVerify ?
                                        <p className='flex items-center gap-4'>Verify: <GoVerified className='text-blue-600' /></p>
                                        : ""}


                                </td>
                                <td>Upcoming</td>
                                <td><button onClick={() => handleDeleteUser(seller._id)} className='btn-outline btn-sm rounded-lg hover:bg-rose-700'>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};



export default AllBuyer;