import React from 'react';
import image from "../../assets/27496.png"
import ButtonPublic from '../Shared/ButtonPublic/ButtonPublic';

const MachineriesHighlight = () => {
    return (
        <div className="hero  bg-base-100 dark:bg-gray-900 text-gray-800  dark:text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-md w-full" alt='machineries-engine' />
                <div>
                    <h1 className="text-5xl font-bold">Machineries-sells.</h1>
                    <h1 className="text-xl font-bold">Second Hand-Machineries-sells.</h1>
                    <p className="py-6 text-justify">
                        We provide all types of facilitates for buyers and sellers . We crete a virtual Market and maintainers a lots of security for satisfaction our burs affections.. So happy shopping. Here you find any kinds of pars of
                        <strong> 4hp Engine</strong>
                        and
                        <strong> pars</strong>
                        .
                        <strong> Remember </strong>
                        we provide high quality of buyers <strong> Satisfaction</strong>
                        , We Promised you to give my best and best.
                    </p>
                    <a href="#category">
                        <ButtonPublic size={""}>Second Hand Category</ButtonPublic>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MachineriesHighlight;