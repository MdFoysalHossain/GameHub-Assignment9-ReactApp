import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { NavLink } from 'react-router';

const MyProfile = () => {
    const {userInfo} = use(AuthContext);
    console.log(userInfo)

    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <title>GameHub - User Info</title>
            <div className="w-[400px]">
                <img className='rounded-2xl' src={userInfo.photoURL} alt="" />
            </div>

            <div className="text-left mt-5 w-[400px]">
                <h1 className='text-lg'>Name: {userInfo.displayName}</h1>
                <p className='text-lg '>Email: {userInfo.email}</p>
                <p className='text-lg '>Email Verified: {userInfo.emailVerified ? "Verified" : "Not Verified"}</p>
                <p className='text-lg '>Number: {userInfo.phoneNumber === null ? "Number Not Added" : userInfo.phoneNumber}</p>
            </div>

            <NavLink className="btn btn-primary text-white mt-5" to={"/UpdateInfo"}>Update Details</NavLink>
            
        </div>
    );
};

export default MyProfile;