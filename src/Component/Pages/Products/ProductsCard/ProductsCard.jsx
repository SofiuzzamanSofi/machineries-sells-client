import React from 'react';
import { GoVerified } from 'react-icons/go';

const ProductsCard = ({ product }) => {
    const { categoryCompany, categorySize, categorySelf, productName, madeOf, ignitionMode, speedCoolingCylinder, pressureImpulse, pistonMovement, fuel, details, picture, location, resalePrice, originalPrice, mfYear, yearOfUse, dateOfPost, timeOfPost, sellerName, sellerEmail, sellerVerify, name, userInfo } = product;
    // console.log(product);

    const noPhotFoundUrl = "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png";


    return (
        <div className='shadow-md flex flex-col justify-center items-center md:block mx-2 my-6'>
            <div className='p-2'>
                <div className='lg:flex gap-6 '>
                    <div >
                        <img className=' w-72 h-48 rounded-lg text-center m-auto' src={picture ? picture : noPhotFoundUrl} alt="" />
                    </div>
                    <div>
                        <p className='text-lg underline'>Users Information:</p>
                        <p><span>Name: </span><span>{sellerName}</span></p>
                        <p><span>Email: </span><span>{sellerEmail}</span></p>
                        <p><span>Location: </span><span>{location}</span></p>
                        <p className='flex items-center'><span>Verified: </span> <span>{sellerVerify ? <GoVerified className='text-blue-600' /> : ""} </span></p>
                        <p><span>Number: </span><span></span></p>
                        <p><span>Posted : </span> <span> {timeOfPost}</span>  <span>{dateOfPost} </span></p>
                    </div>
                </div>
                <div className='lg:flex gap-6 '>
                    <div>
                        <p className='text-lg underline'>Product Information:</p>
                        <p><span>Model/Name: </span><span className='font-semibold'>{productName}</span></p>

                        <div className='sm:flex gap-6 justify-between py-4'>
                            <div>
                                <p><span>Company: </span><span>{categoryCompany}</span></p>
                                <p><span>Origin: </span><span>{madeOf}</span></p>
                                <p><span>Machine Size: </span><span>{categorySize}</span></p>
                                <p><span>Self Start: </span><span>{categorySelf}</span></p>
                                <p><span>Fuel Type: </span><span>{fuel}</span></p>
                            </div>
                            <div>
                                <p><span>Price: </span><span className='font-bold text-green-500'>{resalePrice}</span></p>
                                <p><span>Original Price: </span><span>{originalPrice}</span></p>
                                <p><span>M.A.F.: </span><span>{mfYear}</span></p>
                                <p><span>Years Of Used: </span><span>{yearOfUse}</span></p>
                                <p><span>Fuel Type: </span><span>{fuel}</span></p>
                            </div>
                        </div>

                        <p><span>Ignition Mode: </span><span>{ignitionMode}</span></p>
                        <p><span>Cooling System: </span><span>{speedCoolingCylinder}</span></p>
                        <p><span>Pressure Impulse: </span><span>{pressureImpulse}</span></p>
                        <p><span>Piston Movement: </span><span>{pistonMovement}</span></p>
                    </div>
                </div>
                <div className='py-4'>
                    <p className='text-justify'>{details}</p>
                </div>
                <div>
                    <button className='btn hover:btn-info w-full'>Book now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;