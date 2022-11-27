import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ButtonPublic from '../../Shared/ButtonPublic/ButtonPublic';

const AddProduct = () => {

    // user from firebase--
    const { user, noPhotFoundUrl } = useContext(AuthContext);
    // user from database with role --admin/seller/etc---
    const [currentUser] = useUser(user?.email);
    const navigate = useNavigate();

    // get time and date ----
    const currentDate = new Date();
    const date = currentDate.toDateString().slice(4, 20);
    const time = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    // console.log(date);
    // console.log(time);


    // condtional loadin spinner -----
    if (!user?.uid && !currentUser) {
        return <LoadingSpinner />
    };




    // form submited function ---
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event?.target;

        if (!currentUser?.role === "seller") {
            return toast.error(`Dear ${currentUser?.displayName} are a ${currentUser?.role}, only seller can add a product.`);
        };



        // image upload on imgbb --
        const image = form?.picture?.files[0];
        const formData = new FormData();
        formData.append("image", image);
        const imgKey = process.env.REACT_APP_imgbb_key_liEmail;
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        fetch(imgUrl, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    const imgUrl = data?.data?.url;


                    // console.log(imgUrl);
                    // after image host imgbb complete post products on DB usinsg AXIOS---
                    const product = {
                        categoryCompany: form?.categoryCompany?.value || "",
                        categorySize: form?.categorySize?.value || "",
                        categorySelf: form?.categorySelf?.value || "",
                        productName: form?.productName?.value || "",
                        madeOf: form?.madeOf?.value || "",
                        ignitionMode: form?.ignitionMode?.value || "",
                        speedCoolingCylinder: form?.speedCoolingCylinder?.value || "",
                        pressureImpulse: form?.pressureImpulse?.value || "",
                        pistonMovement: form?.pistonMovement?.value || "",
                        fuel: form?.fuel?.value || "",
                        details: form?.details?.value || "",
                        picture: imgUrl || "",
                        location: form?.location?.value || "",
                        resalePrice: form?.resalePrice?.value || "",
                        originalPrice: form?.originalPrice?.value || "",
                        mfYear: form?.mfYear?.value || "",
                        yearOfUse: form?.yearOfUse?.value || "",
                        dateOfPost: date || "",
                        timeOfPost: time || "",
                        sellerName: currentUser?.displayName || "",
                        sellerEmail: currentUser?.email || "",
                        sellerNumber: form?.sellerNumber?.value || "",
                        sellerVerify: currentUser?.sellerVerify || false,
                        name: form?.name?.value || "",
                        userInfo: form?.userInfo?.value || "",
                    };
                    // console.log(product);
                    // post axios function to store product on db --
                    axios.post("http://localhost:5000/products", product)
                        .then(data => {
                            console.log(data?.data);
                            toast.success(`Dear ${currentUser?.displayName}, your product is added successfully.`);
                            form.reset();
                            navigate("/dashboard/myProducts")
                        })
                        .catch(error => console.log("error from add axios function>> catch:", error));
                }
            })
            .catch(error => console.log("error from img bb catch LI", error));
    };




    return (
        <section className="p-6 dark:bg-gray-900  dark:text-white">
            <p className='text-center py-4 font-bold text-4xl'>Add A Product</p>
            <form onSubmit={handleAddProduct} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid d">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium underline">Your(seller) Personal Inormation</p>

                        <div className='grid gap-4'>
                            <p className="text-sm">Profile Photo</p>
                            <div className="flex items-center space-x-2">
                                <img src={user?.photoURL || noPhotFoundUrl} alt="phot" className="w-10 h-10 rounded-full bg-black dark:bg-base-200" />
                                <button disabled type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">{currentUser?.displayName}</button>
                            </div>
                            <p ><span>Email: {currentUser?.email}  </span></p>
                            <p className='flex items-center'><span>Verified: </span> <span className='pl-6'>{currentUser?.sellerVerify ? <GoVerified className='text-blue-600' /> : ""} </span></p>
                        </div>
                    </div>


                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Product Name</label>
                            <input required type="text" name="productName" placeholder='Product Name' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Model/Company Name</label>
                            <input required type="text" name="categoryCompany" placeholder='Model/Company Name' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>


                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Product Size</label>
                            <input required type="text" name="categorySize" placeholder='20 / 32 / 40' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Self Start</label>
                            <input required type="text" name="categorySelf" placeholder='no / yes' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Made In / Origin</label>
                            <input required type="text" name="madeOf" placeholder='china japan taiwan usa etc' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>



                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Ignition Mode</label>
                            <input required type="text" name="ignitionMode" placeholder='Compression-IgnitionSpeed' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Cooling System</label>
                            <input required type="text" name="speedCoolingCylinder" placeholder='Water-CooledIntake' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Pressure / Impulse</label>
                            <input required type="text" name="pressureImpulse" placeholder='Naturally-AspiratedPiston' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>



                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Piston Movement</label>
                            <input required type="text" name="pistonMovement" placeholder='Reciprocating' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Fuel Type</label>
                            <input required type="text" name="fuel" placeholder='Diesel Petrol Octane Lpg Cng ' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Original Price</label>
                            <input required type="number" name="originalPrice" placeholder='price' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>



                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Resale Price</label>
                            <input required type="number" name="resalePrice" placeholder='price' className="w-full h-10 p-2 rounded-md border-2 border-red-600 text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Manufacture Year</label>
                            <input required type="number" name="mfYear" placeholder='2022' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Year Of Used</label>
                            <input required type="number" name="yearOfUse" placeholder='1 /5/12/15' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>



                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Product Photo</label>
                            <input required type="file" name="picture" placeholder='picture' className="w-full h-8 p-0 rounded-md border border-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Address</label>
                            <input required type="text" name="location" placeholder='Your Address' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Phone Number(optional)</label>
                            <input type="text" name="sellerNumber" placeholder='number +8811---' className="w-full h-10 p-2 rounded-md border-2 border-black text-black" />
                        </div>


                        {/* text area details --- */}
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Bio</label>
                            <textarea required id="bio" name='details' placeholder="" className="w-full min-h-[100px]  md:min-h-[160px] p-2 rounded-md border-2 border-black text-black"></textarea>
                        </div>
                    </div>

                </fieldset>
                <div className="text-center">
                    <ButtonPublic size={"w-full bg-cyan-600 w-56"}>Submit</ButtonPublic>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;