import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Categories = () => {


    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ["categorySize"],
        queryFn: () => axios.get("http://localhost:5000/productsCategory")
    });
    const categories = data?.data?.data;
    // console.log(data?.data?.data)
    if (isLoading) {
        return <LoadingSpinner />
    }



    return (
        <div className='text-center grid gap-6'>
            <div>
                <p className='text-xl font-semibold'>Browse items by category</p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 cursor-pointer hover:'>
                {categories?.map(category => <div key={category._id}>
                    <div className="card w-96 bg-base-100 shadow-xl hover:bg-sky-200" title='click to see by category'>
                        <Link to={`/category/${category?.categorySize}`} >
                            <figure className="px-10 pt-10">
                                <img src={category?.categoryImage} alt="Shoes" className="rounded-xl w-72 h-48" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Machine Size:  {category?.categorySize}</h2>
                                <p className='text-md font-medium'>Machine Type:  {category?.categorySize === "20" ? "Small" : category?.categorySize === "32" ? "Medium" : "Large"}</p>
                            </div>
                        </Link>
                    </div>
                </div>)}
            </div>
            <div>
                <button className='btn'>See All Products</button>
            </div>
        </div>
    );
};

export default Categories;