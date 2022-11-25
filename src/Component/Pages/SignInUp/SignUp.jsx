import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';
import Social from './Social';
import saveUserOnDb from './UserOnDb';

const SignUp = () => {

    const { createNewUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm(); //useForm react hook ....
    const [signUpError, setSignUpError] = useState("");
    const [createUserEmail, setCreateUserEmail] = useState("");
    // IMAGE BB HOT KEY --
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    // token customs hooks------
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();


    // signin update name, send email verify  function----------------
    const handleSignUp = data => {
        setSignUpError("");


        // host image on imgbb --
        const image = data.image[0];
        console.log(image);



        createNewUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name,
                    // photoURL: ""
                };
                // console.log(userInfo);
                updateUser(userInfo)
                    .then(() => {
                        // console.log(user);
                        // saveUser(user?.displayName, user?.email);



                        // save user on database ---
                        saveUserOnDb(user);

                        // set user on token ---
                        setCreateUserEmail(user?.email);
                    })
                    .catch(error => {
                        setSignUpError(error.message);

                    });
                toast.success("User Created Successfully");
            }).catch(error => {
                setSignUpError(error.message);

            });
    };


    // // save user to database -----------
    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch("https://doctors-server-seven.vercel.app/users", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {


    //         });
    // };

    if (token) {


        // WARNING IS GIVVEN FROM HERE---
        navigate("/");
    }




    return (
        <div className='min-h-screen flex justify-center items-center'>

            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create a Account</h2>



                <form onSubmit={handleSubmit(handleSignUp)} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm">Full Name</label>
                            <input {...register("name", { required: true })} type="text" placeholder="your full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            <p className='text-xs text-red-700'>{errors?.name ? "Pls Input Full Name." : ""}</p>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="image" className="block text-sm">Image</label>
                            <input {...register("image", { required: "Image if required" })} type="file" name="image" id="image" placeholder="your full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors?.image ? <p className='text-[10px] text-red-600'>{errors?.image?.message}</p> : ""}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input  {...register("email", { required: "Email is required." })} type="email" name="email" id="email" placeholder="example@mail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors?.email ? <p className='text-[10px] text-red-600'>{errors?.email?.message}</p> : ""}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input
                                {...register("password",
                                    {
                                        required: "Password is required.",
                                        minLength: { value: 6, message: "minimum length is 6 character." },
                                        pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/, message: "Password Must Be Strong: AA##11cc " }
                                    }
                                )}
                                type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors?.password ? <p className='text-[10px] text-red-600'>{errors?.password?.message}</p> : ""}
                            {signUpError && <p className='text-[10px] text-red-600'>{signUpError}</p>}
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign Up</button>
                </form>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>

                {/* social icons login--  */}
                <Social />


                <p className="text-sm text-center dark:text-gray-400">Already have an account?
                    <Link to="/signin" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-cyan-500" alt=""> Sign In</Link>
                </p>
            </div>
        </div>
    );
};


export default SignUp;