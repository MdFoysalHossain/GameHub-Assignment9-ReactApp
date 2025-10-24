import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { NavLink } from 'react-router';

const MyProfile = () => {
    const { userInfo } = use(AuthContext);

    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <title>GameHub - User Info</title>
            <h2 className='text-2xl font-semibold mb-2'>User <span className='text-primary'>Profile</span></h2>
            <div className="w-[330px]">
                <img className='rounded-2xl' src={userInfo.photoURL} alt="" />
            </div>
        
            {/* <div className="text-left mt-5 w-[400px]">
                <h1 className='text-lg'>Name: {userInfo.displayName}</h1>
                <p className='text-lg '>Email: {userInfo.email}</p>
                <p className='text-lg '>Email Verified: {userInfo.emailVerified ? "Verified" : "Not Verified"}</p>
                <p className='text-lg '>Number: {userInfo.phoneNumber === null ? "Number Not Added" : userInfo.phoneNumber}</p>
            </div> */}
            <div className="w-full mx-auto flex justify-center items-center mt-5">
                <fieldset className="fieldset w-[330px]">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input placeholder:text-gray-500 bg-white border-gray-300" placeholder={userInfo.displayName} disabled  />
                    <label className="label">Profile Image</label>
                    <input type="text" name='imgLink' className="input placeholder:text-gray-500 bg-white border-gray-300" placeholder={userInfo.photoURL} disabled  />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input placeholder:text-gray-500 bg-white border-gray-300" placeholder={userInfo.email} disabled />
                    <label className="label">Email Verification</label>
                    <input type="email" name='emailVeri' className="input placeholder:text-gray-500 bg-white border-gray-300" placeholder="Verification Required" disabled/>
                </fieldset>

            </div>
            <NavLink className="btn btn-primary text-white mt-5" to={"/UpdateInfo"}>Update Details</NavLink>

        </div>
    );
};

export default MyProfile;