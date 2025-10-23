import React, { use } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();

    const {userInfo, userLogOut, setUser} = use(AuthContext)



    const selectedCat = (e) => {
        // console.log(e.target.value)
        const selectedGenre = e.target.value;
        console.log(selectedGenre)
        // return <Navigate to={`/${selectedGenre}`}/>;
        navigate(`/Genre/${selectedGenre}`);
    }

    const userLogOutFunc = () => {
        userLogOut()
            .then(
                setUser(null)
            ) .catch(error => {
                console.log("Logout Error:", error)
            })
    }

    const selectCat = <>
        <li><select defaultValue="Select Game Genre" onChange={selectedCat} className="select bg-white text-black">
            <option disabled={true}>Select Game Genre</option>
            <option>FPS</option>
            <option>RPG</option>
            <option>MMORPG</option>
        </select></li>
        {
            userInfo ? <li><NavLink onClick={userLogOutFunc} className={"btn btn-primary text-white shadow-none"} to={"/Auth/Login"}>Log Out</NavLink></li> : 
            <li><NavLink className={"btn btn-primary text-white shadow-none"} to={"/Auth/Login"}>Login</NavLink></li>
        }
    </>

    return (
        <div className="navbar">
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