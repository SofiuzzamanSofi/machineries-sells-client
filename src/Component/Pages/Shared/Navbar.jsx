import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.JPG";
import { AuthContext } from '../../context/AuthProvider';
import ButtonPublic from './ButtonPublic/ButtonPublic';

const Navbar = () => {

    const { logOut, user, setUser } = useContext(AuthContext);

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
    }


    const navItems = <>
        <li><Link to="/" className='hover:scale-110'>Home</Link></li>
        {
            user?.uid ? <>
                <li><Link to="/dashboard" className='hover:scale-110'>Dashboard</Link></li>
            </> : ""
        }
        <li><Link to="/blogs" className='hover:scale-110'>Blogs</Link></li>
        <li><Link to="/contactUs" className='hover:scale-110'>Contact Us</Link></li>
    </>

    return (
        <div className='bg-gray-100 dark:bg-gray-900'>
            <div className="navbar pb-8  text-gray-800  dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className=" btn btn-link normal-case text-xl mx-0 px-0">
                        <img className='rounded w-full h-full z-50 md:hover:h-20 border-rose-800' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">


                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end" title={user?.displayName}>
                    {user?.uid ?
                        <Link to="/signin" className="" onClick={handleLogOut}><ButtonPublic size={"hover:scale-110"}>Sign Out</ButtonPublic></Link>
                        :
                        <Link to="/signin"><ButtonPublic>Sign In</ButtonPublic></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;