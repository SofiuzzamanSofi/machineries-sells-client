import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedCard = ({ product }) => {
    return (
        <div className="card shadow-xl hover:bg-slate-100 dark:bg-gray-800 dark:hover:bg-gray-700" title='click to see by category'>
            <Link to={`/product/${product?._id}`} >
                <figure className="px-10 pt-10">
                    <img src={product?.picture} alt="Shoes" className="rounded-xl w-72 h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Machine Size:  {product?.productName}</h2>
                    <p className='text-md font-medium'>Machine Type:  {product?.categorySize === "20" ? "Small" : product?.categorySize === "32" ? "Medium" : "Large"}</p>
                </div>
            </Link>
        </div>
    );
};

export default AdvertisedCard;