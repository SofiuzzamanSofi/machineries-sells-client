import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useUser from '../../../hooks/useUser';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ButtonPublic from '../../Shared/ButtonPublic/ButtonPublic';

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    // const [userFromDb, setUserFromDb] = useState(null);
    const [exampleUser] = useUser(user?.email);
    console.log("dashboard", exampleUser);


    if (!user?.uid && !exampleUser) {
        return <LoadingSpinner />
    };


    const product = {
        categoryCompany: "CHANGHAI",
        categorySize: 32,
        categorySelf: "no",
        productName: "4HPWater Cooled Diesel Engine(HP- 32PC)",
        madeOf: "China",
        ignitionMode: "CompressionIgnitionSpeed",
        speedCoolingCylinder: "WaterCooledIntake",
        pressureImpulse: "NaturallyAspiratedPiston",
        pistonMovement: "Reciprocating",
        fuel: "Diesel",
        details: "OldHP - 32PC diesel engine fully restoration.HP - 32PC type single cylinder diesel engine for zhejiang three - ring, HP - 32PC is enhanced, cylinder diameter and travel have increased to 140 mm, maximum power can reach 3.23 W, higher stability and beautiful appearance is concise and easy, reliable quality, long service life, small vibration, wide range of USES: can form a complete set of small tractor, agricultural machinery, small construction machinery, generator set, pump, air compressor.Inland river vessels and agricultural and sideline products processing(threshing machine, rice milling machine, grinding machine, feed machine) power plant",
        picture: "https//5.imimg.com/data5/KL/KW/NQ/ANDROID-41394408/product-jpeg-1000x1000.jpg",
        location: " Mymenshing",
        resalePrice: 180,
        originalPrice: 459,
        mfYear: 2003,
        yearOfUse: 12,
        dateOfPost: "14Dec, 2022",
        timeOfPost: "11:29 pm",
        sellerName: "BarakObama Kahli",
        sellerEmail: "obamaikegmail.com",
        sellerVerify: true,
        name: ",   userInfo:"
    }


    const handleAddProduct = event => {
        event.preventDefault();
    }


    return (
        <section className="p-6 bg-white dark:bg-gray-900 text-gray-800  dark:text-white">
            <p className='text-center py-4 font-bold text-4xl'>Add A Product</p>
            <form onSubmit={handleAddProduct} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid d">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium underline">Your(seller) Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        <div className=''>
                            <label htmlFor="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">State / Province</label>
                            <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>



                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Website</label>
                            <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Bio</label>
                            <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
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