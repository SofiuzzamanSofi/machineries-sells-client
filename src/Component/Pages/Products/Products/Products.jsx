import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {

    const { data: products } = useLoaderData();
    // console.log(products);
    const location = useLocation();
    // console.log(location?.pathname)

    if (!products) {
        return <LoadingSpinner />
    }
    return (
        <div className='dark:bg-gray-900 text-gray-800  dark:text-white'>
            <div>
                <p className='text-lg text-center md:text-4xl py-4'>
                    {
                        location?.pathname === "/category/all" ?
                            "Show All "
                            :
                            `Found ${products[0]?.categorySize} Size Category`
                    }


                    : <strong>{products.length}</strong> Product</p>
            </div>
            <div className='grid gap-6 lg:grid-cols-2'>
                {products?.map(product => <ProductsCard
                    key={product?._id}
                    product={product}
                >

                </ProductsCard>)}
            </div>
        </div>
    );
};

export default Products;