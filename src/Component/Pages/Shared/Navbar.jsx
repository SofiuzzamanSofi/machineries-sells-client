import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { AuthContext } from '../../context/AuthProvider';
import ButtonPublic from './ButtonPublic/ButtonPublic';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const { logOut, user, setUser } = useContext(AuthContext);
    const location = useLocation();

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
                        onClick={() => setShowNav(!showNav)}
                    >
                        <label tabIndex={0} className="md:hidden mb-2">
                            <ButtonPublic><FaBars /></ButtonPublic>
                        </label>
                        {showNav &&
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                <div className="navbar-end" title={user?.displayName}>
                    {user?.uid ?
                        <Link to="/" className="" onClick={handleLogOut}><ButtonPublic size={""}>Sign Out</ButtonPublic></Link>
                        :
                        <Link to="/signin"><ButtonPublic>Sign In</ButtonPublic></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;