import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Social from './Social';

const SignIn = () => {


    const { login, loading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const [loginUserEmail, setLoginUserEmail] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();


    // token customs hooks---
    const [token, tokenLoading] = useToken(loginUserEmail);


    // location navigation ---
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    // handle sign function ---
    const handleSign = (data) => {
        setLoginError("")
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user?.email);
                // toast.success("User Login Successfully.")
                toast.success("User Login Successfully.", user?.displayName);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            });
    };



    // if (tokenLoading) {
    //     return <LoadingSpinner />
    // } else {

    // }
    // console.log(tokenLoading);
    // console.log("lloding", loading);


    // if (token) {
    //     // WARNING IS GIVVEN FROM HERE--- ************
    //     navigate(from, { replace: true });
    // };




    return (
        <div className='min-h-screen flex justify-center items-center'>

            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>



                <form onSubmit={handleSubmit(handleSign)} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input {...register("email", { required: true, })} type="email" name="email" id="email" placeholder="example@mail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors?.email ? <p className='text-[10px] text-red-600'>"email is required"</p> : ""}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input
                                {...register("password",
                                    {
                                        required: "password",
                                        minLength: { value: 6, message: "minimum length is 8 character" },
                                        pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/, message: "Password must 2 Capital 2 Spacial character 2 number and 2 small : example: AA$#11aa" }
                                    }
                                )}
                                type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors?.password && <p role="alert" className='text-[10px] text-red-600'>{errors?.password?.message}</p>}
                            {loginError && <p className='text-[10px] text-red-600'>{loginError}</p>}
                            <p className='text-[10px] py-1 hover:underline hover:text-cyan-500 cursor-pointer'>Forgot Password</p>
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign In</button>
                </form>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>

                {/* social icons login--  */}
                <Social />


                <p className="text-sm text-center dark:text-gray-400">Don't have account?
                    <Link to="/signUp" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-cyan-500" alt=""> Sign up here</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;