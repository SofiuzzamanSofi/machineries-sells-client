import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ButtonPublic from '../ButtonPublic/ButtonPublic';

const ModalPublic = ({ modalOpen, setModalOpen, product }) => {
    const { categoryCompany, categorySize, categorySelf, productName, madeOf, ignitionMode, speedCoolingCylinder, pressureImpulse, pistonMovement, fuel, details, picture, location, resalePrice, originalPrice, mfYear, yearOfUse, dateOfPost, timeOfPost, sellerName, sellerEmail, sellerVerify, name, userInfo } = product;
    const { user } = useContext(AuthContext);

    const handleModal = (event) => {
        event.preventDefault();

        const booking = {
            productName: productName,
            productId: product?._id,
            sellerEmail: sellerEmail,
            resalePrice: resalePrice,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerNumber: event?.target?.number?.value,
            buyerLocation: event?.target?.location?.value,
        };
        console.log(booking)

        setModalOpen(false)
        toast.success(`Dear ${user?.displayName}, Your Product is Successfully Booked.`)
    }
    return (
        <div>
            <input type="checkbox" id="modal-public" className="modal-toggle" />
            <label htmlFor="modal-public" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">

                    <form onSubmit={handleModal}>
                        <p className='text-lg font-semibold'>{productName}</p>
                        {/* <p className='font-semibold'>Product Id:{product?._id}</p> */}
                        <div className='grid gap-2 my-4'>
                            <input type="text" className='border rounded-md h-8 p-2' defaultValue={`Price: $${resalePrice}`} disabled />
                            <input type="text" className='border rounded-md h-8 p-2' defaultValue={user?.displayName} disabled />
                            <input type="text" className='border rounded-md h-8 p-2' defaultValue={user?.email} disabled />
                            <input type="number" name="number" className='border rounded-md h-8 p-2' placeholder='Phone Number' required />
                            <input type="text" name="location" className='border rounded-md h-8 p-2' placeholder='Location Pls' required />
                        </div>
                        <ButtonPublic size={"w-full"}>Submit</ButtonPublic>
                    </form>
                </label>

            </label>
        </div>
    );
};

export default ModalPublic;