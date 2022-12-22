import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { GoVerified } from 'react-icons/go';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const MyOrders = () => {


    const { user, noImageFoundUrl } = useContext(AuthContext);

    // load Advertised from react query ---
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/mybooking?email=${user?.email}`);
            const data = await res.json();
            if (data?.success) {
                return data.data;
            } else { return data.success };
        },
    });
    // console.log(data);

    const handleDeleteUser = id => {
        toast.error("This feature is not complete due to time..Cumming Soon.")
    };


    return (
        <div className='dark:bg-gray-900  dark:text-white'>
            <p className='text-center py-4 font-bold text-4xl'>Show all booking items.</p>
            <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium underline">Your Personal Inormation</p>
                <div className='grid gap-4'>
                    <p className="text-sm">Profile Photo</p>
                    <div className="flex items-center space-x-2">
                        <img src={user?.photoURL || noImageFoundUrl} alt="phot" className="w-10 h-10 rounded-full bg-black dark:bg-base-200" />
                        <button disabled type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">{user?.displayName}</button>
                    </div>
                    <p ><span>Email: {user?.email}  </span></p>
                    <p className=''> <span className=''>You are:  </span></p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full  dark:text-black dark:bg-black">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Info</th>
                                <th>Price</th>
                                <th>Access</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* table map ---- */}
                            {data && data.map((product, index) => <tr key={product._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{product?.productName}</td>
                                <td>
                                    <p>Seller Email: {product?.sellerEmail}</p>
                                </td>
                                <td>{product?.resalePrice}</td>
                                <td>Upcoming</td>
                                <td><button onClick={() => handleDeleteUser(product._id)} className='btn-outline btn-sm rounded-lg hover:bg-rose-700'>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;