import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ButtonPublic from '../../Shared/ButtonPublic/ButtonPublic';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';

const MyProducts = () => {

    // user from firebase---
    const { user, noImageFoundUrl } = useContext(AuthContext);
    // user from database -----
    const [currentUser] = useUser(user);
    // product from db of axios function ---
    const [products, setProducts] = useState("");
    // console.log(products);
    const [stateChange, setStateChange] = useState(true);




    useEffect(() => {
        if (currentUser?.role === "seller" || currentUser?.role === "admin") {
            axios.get(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/myProducts?email=${currentUser?.email}`)
                .then(data => {
                    // console.log(data?.data?.data);
                    setProducts(data?.data?.data);
                })
                .catch(error => console.log("error from my product page axios catch:", error));
        };
    }, [currentUser, stateChange]);

    // reqact query give a erro: [react_devtools_backend.js:4026 Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["myProducts"]]------
    // const { data, isLoading, refetch } = useQuery({
    //     queryKey: ["myProducts"],
    //     queryFn: async () => {
    //         axios.get(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/myProducts?email=${currentUser?.email}`)
    //             .then(data => {
    //                 // console.log(data?.data?.data);
    //                 setProducts(data?.data?.data);
    //                 return data;
    //             })
    //             .catch(error => console.log("error from my product page axios catch:", error));
    //     },
    // });
    // console.log(data);






    // add advertisement ("HomePageAdds") add function ----
    const addAdvertisement = (id, HomePageAdds) => {
        console.log("under add function", id);
        const advertise = { advertiseName: HomePageAdds };
        axios.put(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/advertised/products/${id}`, advertise)
            .then(data => {
                if (data?.data?.success) {
                    setStateChange(!stateChange);
                    toast.success(data?.data?.message);
                } else {
                    toast.error(data?.data?.message);
                };
            })
            .catch(error => console.log("add Advertise axios catch:", error));
    };

    // add advertisement **unimplemet function advertisement 2 ------
    const unImplemetn = () => {
        toast.error("This Functionality is not implement yet.")
    };


    // condtional loadin spinner -----
    if (!user?.uid || !currentUser) {
        return <LoadingSpinner />
    };




    return (
        <div className='dark:bg-gray-900  dark:text-white p-4'>

            <p className='text-center text-3xl py-6'><strong className='text-orange-400'>{currentUser?.displayName}</strong>, You Have total: <strong className='text-orange-400'>{products?.length ? products?.length : 0}</strong> Products</p>
            <div className='flex gap-4'>
                <img src={"https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg" || noImageFoundUrl} alt="ProfilePhoto" className='h-14 w-14 rounded-full border border-rose-600' />
                <p className='flex items-center'><span>Verified: </span> <span className='pl-6'>{currentUser?.sellerVerify ? <GoVerified className='text-blue-600' /> : ""} </span></p>
            </div>
            <div>
                <p>Seller Name: {currentUser?.displayName}</p>
                <p>Seller Email : {currentUser?.email}</p>
            </div>

            {/* talbe ------------- */}

            <div className="overflow-x-auto my-6">
                <table className="table w-full dark:text-black dark:bg-black">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Image</th>
                            <th>Product Name & Id</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>



                    <tbody>
                        {/* table data map ---------  */}
                        {/* Warning: validateDOMNesting(...): <div> cannot appear as a child  from tbody section-- */}
                        {products && products?.map((product, index) => <tr key={product._id} className="hover">
                            <th>{index + 1}</th>
                            <td>
                                <img src={products?.picture || noImageFoundUrl} alt="ProfilePhoto" className='h-14 w-14 rounded-full border border-rose-600' />
                            </td>
                            <td>
                                <p>{product?.productName}</p>
                                <p>ID: {product?._id}</p>
                            </td>
                            <td>{product?.resalePrice}</td>
                            <td>{products?.sold ? "Un Available" : "Available"}</td>
                            <td>
                                {
                                    product?.advertiseName ? `Running: ${product?.advertiseName}`
                                        :
                                        <div className="dropdown">
                                            <label tabIndex={0} className="btn btn-sm btn-outline m-1">Advertisement <MdArrowDropDownCircle /></label>
                                            <ul tabIndex={0} className="dropdown-content menu py-2 shadow bg-base-100 rounded-box w-52">
                                                <li onClick={() => addAdvertisement(product?._id, "HomePageAdds")}><Link to="">HomePage adds cos.5/1d </Link></li>
                                                <li onClick={unImplemetn}><Link to="">Super Add 15/month</Link></li>
                                            </ul>
                                        </div>
                                }


                            </td>
                            <td><button className='btn-outline btn-sm rounded-lg hover:bg-rose-700'>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;