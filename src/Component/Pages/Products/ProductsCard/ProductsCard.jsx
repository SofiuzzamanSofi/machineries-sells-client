import React, { useContext, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../../context/AuthProvider';
import ButtonPublic from '../../Shared/ButtonPublic/ButtonPublic';
import ModalPublic from '../../Shared/ModalPublic/ModalPublic';

const ProductsCard = ({ product, }) => {

    const { noImageFoundUrl } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(true);
    const { categoryCompany, categorySize, categorySelf, productName, madeOf, ignitionMode, speedCoolingCylinder, pressureImpulse, pistonMovement, fuel, details, picture, location, resalePrice, originalPrice, mfYear, yearOfUse, dateOfPost, timeOfPost, sellerName, sellerEmail, sellerVerify, name, userInfo, sellerNumber } = product;
    // console.log(product);



    return (
        <div className='shadow-md dark:bg-gray-800 flex flex-col justify-center items-center md:block mx-2 my-6 rounded-md relative'>
            <div className='p-6'>
                <div className='lg:flex gap-6 min-h-[250px]'>
                    <div className='cursor-pointer'>
                        <PhotoProvider>
                            <PhotoView src={picture ? picture : noImageFoundUrl}>
                                <img
                                    className='w-72 h-48 rounded-lg text-center m-auto'
                                    src={picture ? picture : noImageFoundUrl} alt=""
                                />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div>
                        <p className='text-lg underline uppercase font-bold'>Users Information:</p>
                        <p><span>Name: </span><span>{sellerName}</span></p>
                        <p><span>Email: </span><span>{sellerEmail}</span></p>
                        <p><span>Location: </span><span>{location}</span></p>
                        <p className='flex items-center'><span>Verified: </span> <span>{sellerVerify ? <GoVerified className='text-blue-600' /> : ""} </span></p>
                        <p><span>Number: </span><span>{sellerNumber ? sellerNumber : ""}</span></p>
                        <p><span>Posted : </span> <span> {timeOfPost}</span>  <span>{dateOfPost} </span></p>
                    </div>
                </div>
                <div className=''>
                    <div className='min-h-[76px]'>
                        <p className='text-lg underline uppercase font-bold'>Product Information:</p>
                        <p><span>Model/Name: </span><span className='font-semibold'>{productName}</span></p>
                    </div>
                    <div className='sm:flex gap-6 justify-between py-4 min-h-[120px]'>
                        <div className=''>
                            <p><span>Company: </span><span className='capitalize'>{categoryCompany}</span></p>
                            <p><span>Origin: </span><span className='capitalize'>{madeOf}</span></p>
                            <p><span>Machine Size: </span><span>{categorySize}</span></p>
                            <p><span>Self Start: </span><span className='capitalize'>{categorySelf}</span></p>
                            <p><span>Fuel Type: </span><span className='capitalize'>{fuel}</span></p>
                        </div>
                        <div className=''>
                            <p><span>Price: $</span><span className='font-bold text-green-500'>{resalePrice}</span></p>
                            <p><span>Original Price: $</span><span>{originalPrice}</span></p>
                            <p><span>M.A.F.: </span><span>{mfYear}</span></p>
                            <p><span>Years Of Used: </span><span>{yearOfUse}</span></p>
                            <p><span>Fuel Type: </span><span className='capitalize'>{fuel}</span></p>
                        </div>
                    </div>
                    <div className='min-h-[76px]'>
                        <p><span>Ignition Mode: </span><span className='capitalize'>{ignitionMode}</span></p>
                        <p><span>Cooling System: </span><span className='capitalize'>{speedCoolingCylinder}</span></p>
                        <p><span>Pressure Impulse: </span><span className='capitalize'>{pressureImpulse}</span></p>
                        <p><span>Piston Movement: </span><span className='capitalize'>{pistonMovement}</span></p>
                    </div>
                </div>
                <div className='py-4'>
                    <p className='text-justify max-w-[601px]'>{details}</p>
                </div>
                <div className='pt-8'>
                    <label
                        htmlFor="modal-public" className="btn hover:bg-[#6d5347] hover:text-white absolute bottom-5 left-5 right-5"
                    >
                        Book now
                    </label>
                    {/* <ButtonPublic size={"w-full"}>Book now</ButtonPublic> */}
                    {/* <button className='btn hover:btn-info '>Book now</button> */}
                </div>
            </div>
            {modalOpen && <ModalPublic modalOpen={modalOpen} setModalOpen={setModalOpen} product={product} />}
        </div>
    );
};

export default ProductsCard;