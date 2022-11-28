import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedCard = ({ product }) => {
    return (
        <div className="card shadow-xl dark:bg-gray-800  hover:scale-110" title='click to see by category'>
            <Link to={`/category/${product?.categorySize}`} >
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