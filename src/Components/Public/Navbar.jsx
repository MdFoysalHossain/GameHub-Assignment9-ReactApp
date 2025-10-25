import React, { use } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    const { userInfo, userLogOut, setUser } = use(AuthContext)




    const userLogOutFunc = () => {
        userLogOut()
            .then(
                setUser(null)
            ).catch(error => {
                console.log("Logout Error:", error)
            })
    }

    const selectCat = <>
        <li><NavLink className="btn about shadow-none border-0 bg-transparent text-lg" to={"/About"}>About Us</NavLink></li>

        {
            userInfo ? <li className='flex flex-row gap-2 justify-center items-center'><img onClick={() => { navigate('/MyProfile') }} className='w-10 h-10 p-0 m-0 bg-white' src={userInfo.photoURL} alt="" /> <NavLink onClick={userLogOutFunc} className={"btn btn-primary text-white shadow-none"} to={"/Auth/Login"}>Log Out</NavLink></li> :
                <li><NavLink className={"btn btn-primary text-white shadow-none"} to={"/Auth/Login"}>Login</NavLink></li>
        }
    </>

    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 gap-3 p-2 shadow">
                        {selectCat}
                    </ul>
                </div>
                <Link className="btn shadow-none border-0 bg-transparent text-2xl gap-0 font-semibold">Game<span className='text-primary m-0 p-0'>Hub</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {selectCat}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;