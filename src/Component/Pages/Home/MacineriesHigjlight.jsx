import React from 'react';
import image from "../../assets/27496.png"

const MachineriesHighlight = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-md w-full" alt='machineries-engine' />
                <div>
                    <h1 className="text-5xl font-bold">Machineries-sells.</h1>
                    <h1 className="text-xl font-bold">Second Hand-Machineries-sells.</h1>
                    <p className="py-6 text-justify">
                        We provide all types of facilitates for buyers and sellers . We crete a virtual Market and maintainers a lots of security for satisfaction our burs affections.. So happy shopping. Here you find any kinds of pars of
                        <strong className='text-gray-900'> 4hp Engine</strong>
                        and
                        <strong className='text-gray-900'> pars</strong>
                        .
                        <strong className='text-gray-900'> Remember </strong>
                        we provide high quality of buyers <strong className='text-gray-900'> Satisfaction</strong>
                        , We Promised you to give my best and best.
                    </p>
                    <button className="btn hover:btn-primary">Second Hand Category</button>
                </div>
            </div>
        </div>
    );
};

export default MachineriesHighlight;