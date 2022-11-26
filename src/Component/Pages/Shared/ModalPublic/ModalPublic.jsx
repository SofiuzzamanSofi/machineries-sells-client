import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ButtonPublic from '../ButtonPublic/ButtonPublic';

const ModalPublic = ({ setModalOpen, product }) => {
    const { productName, resalePrice, sellerEmail, } = product;
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

        axios.post("http://localhost:5000/bookings", booking)
            .then(data => {
                if (data?.data?.success) {
                    // console.log(data?.data);
                    toast.success(data?.data?.message);
                    setModalOpen(false);
                } else { toast.error(data?.data?.message) };
            })
            .catch(error => console.log("error from axios catch", error))
    };




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