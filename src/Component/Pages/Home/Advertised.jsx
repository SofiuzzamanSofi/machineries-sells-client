import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useUser from '../../hooks/useUser';
import AdvertisedCard from './AdvertisedCard';

const Advertised = () => {

    // user from firebase--------
    const { user, noImageFoundUrl } = useContext(AuthContext);
    // user fro database ---
    const [currentUser] = useUser(user);


    // load Advertised from react query ---
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("https://machineries-sells-server-sofiuzzamansofi.vercel.app/advertised/products");
            const data = await res.json();
            if (data?.success) {
                return data.data;
            } else { return data.success };
        },
    });
    // console.log(data);



    if (data) {
        return (
            <div className='py-12 dark:bg-gray-900  dark:text-white p-4 border-y-[.25px] border-dashed'>
                <div className='text-center'>
                    <p className='text-5xl '>Advertisement Area</p>
                </div>
                <div className='py-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 cursor-pointer'>
                    {data && data?.map(product => <AdvertisedCard key={product._id} product={product} />)}
                </div>
            </div>
        );
    };
};

export default Advertised;