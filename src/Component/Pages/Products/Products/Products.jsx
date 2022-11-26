import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {

    const { data: products } = useLoaderData();
    // console.log(products);

    if (!products) {
        return <LoadingSpinner />
    }
    return (
        <div>
            <div>
                <p className='text-lg '>Found <strong>{products[0]?.categorySize}</strong> Size Category Product: <strong>{products.length}</strong></p>
            </div>
            <div>
                {products?.map(product => <ProductsCard
                    key={product?._id}
                    product={product}
                >h</ProductsCard>)}
            </div>
        </div>
    );
};

export default Products;