import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import loginIcon from "../../assets/ProLockIcon.png";
import { AuthContext } from '../../context/AuthProvider';
import ButtonPublic from './ButtonPublic/ButtonPublic';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    // ||| button for mobile screen menu ---
    const [showNav, setShowNav] = useState(false);
    // profile pic ---
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { logOut, user, setUser } = useContext(AuthContext);
    const location = useLocation();

    // scroll to off profile or mobile menu bar ---
    (showNav || isProfileOpen) && window.addEventListener("scroll", () => {
        setShowNav(false);
        setIsProfileOpen(false);
    });

    const handleMenuMobile = () => {
        setShowNav(!showNav);
        setIsProfileOpen(false);
    };
    const handleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setShowNav(false);
    };




    // logout function ---------
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                localStorage.removeItem("accessToken");
                setUser(null);
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });
    };


    // navbar hide for smaller device -------
    // for folder/root/path/url change---
    useEffect(() => {
        setShowNav(false);
    }, [location.pathname]);
    // for scroll ----
    showNav && window.addEventListener("scroll", () => setShowNav(false));
    console.log(showNav);

    const navItems = <>
        <li><Link to="/" className='hover:bg-[#6d5347] hover:text-white rounded'>Home</Link></li>
        {
            // user?.uid ?
            <>
                <li><Link to="/dashboard" className='hover:bg-[#6d5347] hover:text-white rounded'>Dashboard</Link></li>
            </>
            // :
            // ""
        }
        <li><Link to="/blogs" className='hover:bg-[#6d5347] hover:text-white rounded'>Blogs</Link></li>
        <li><Link to="/contactUs" className='hover:bg-[#6d5347] hover:text-white rounded'>Contact Us</Link></li>
    </>

    return (
        <div className='bg-gray-100 dark:bg-gray-900'>
            <div className="navbar  text-gray-800  dark:text-white max-w-screen-2xl mx-auto px-[2px]">
                <div className="navbar-start">

                    {/* smaller device / choto mobile------- */}
                    <div className="dropdown"
                        onClick={handleMenuMobile}
                    >
                        <label tabIndex={0} className="md:hidden mb-2">
                            <ButtonPublic><FaBars /></ButtonPublic>
                        </label>
                        {showNav &&
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-900">
                                {navItems}
                            </ul>
                        }
                    </div>


                    <Link to="/" className=" btn btn-link text-xl p-0">
                        <img className='rounded w-full h-full z-50 bg-[#6d5347]' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>

                {/* login logout pic avater ---  */}
                <div className="navbar-end" title={user?.displayName}>
                    {user?.uid ?
                        <Link
                            onClick={handleProfile}
                            title={user?.displayName ? user?.displayName : "No Name found, Update your name pls"}
                        >
                            <img className='w-12 h-12 rounded-full mt- mr-2 pt-2' src={user?.photoURL ? user?.photoURL : loginIcon} alt="" />
                        </Link>
                        :
                        <Link
                            onClick={handleProfile}
                            to="/signin"
                            title='Sign in Pls'
                        >
                            <ButtonPublic>Sign In</ButtonPublic>
                        </Link>
                    }
                </div>


                {user && isProfileOpen && (
                    <div
                        className="absolute top-[68px] right-1 z-50 text-base list-none bg-white rounded-2xl divide-y divide-gray-100 shadow dark:bg-gray-900 dark:divide-gray-600 "
                        onClick={handleProfile}
                    >
                        <ul>
                            <Link className="py-3 px-4 block max-w-[210px] cursor-text">
                                <span className="block text-sm text-gray-900 dark:text-white" >{user?.displayName ? user?.displayName : "No Name found, Update your name pls"}</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                            </Link>
                        </ul>
                        <ul className="py-1" aria-labelledby="user-menu-button">
                            <li>
                                <Link to="/dashboard" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</ Link>
                            </li>
                            <li>
                                <Link to="" className="cursor-auto block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</ Link>
                            </li>
                            <li>
                                <Link to="" className="cursor-auto block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</ Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleLogOut}
                                >
                                    <ButtonPublic>
                                        Sign out
                                    </ButtonPublic>
                                </ Link>
                            </li>
                        </ul>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Navbar;