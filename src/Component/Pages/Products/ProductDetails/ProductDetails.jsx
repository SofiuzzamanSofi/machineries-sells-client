import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ProductsCard from '../ProductsCard/ProductsCard';

const ProductDetails = () => {
    const { data: product } = useLoaderData();
    // console.log(products);
    const location = useLocation();
    // console.log(location?.pathname)
    // console.log("details page", product);
    if (!product) {
        return <LoadingSpinner />
    }
    return (
        <div className='dark:bg-gray-900 text-gray-800  dark:text-white p-4'>
            <p className='text-center text-5xl '> product details</p>
            <div className='flex justify-center'>
                <ProductsCard product={product} />
            </div>
        </div>
    );
};

export default ProductDetails;