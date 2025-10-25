import React, { use } from 'react';
import { NavLink } from 'react-router';
import { DataContext } from '../../Contexts/DataContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from "motion/react"

const UpdateInfo = () => {

    const { userInfo, updateUserInfo } = use(AuthContext)


    const updateInfo = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imgLink = e.target.imgLink.value;
        updateUserInfo(name, imgLink)
            .then(result => toast("Info Updated Successfully", { style: { background: "#12d369", color: "white" } })
            )
            .catch(error => {
                    toast("An error occured while updaing info, try again!", { style: { background: "#ff4d4d", color: "white" } })
                }
            )

    }
    return (
        <motion.div 
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        className='flex justify-center items-center my-5 mx-3 lg:mx-0 lg:my-0 lg:h-[80vh]'>
            <title>GameHub - Update User Info</title>
            <ToastContainer hideProgressBar={true}></ToastContainer>
            <div className="card bg-base-100 w-full h-fit max-w-sm shrink-0 shadow-md">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold mb-2'>Account <span className='text-primary'>Update</span></h2>
                    <form onSubmit={updateInfo}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label">Profile Image</label>
                            <input type="text" name='imgLink' className="input" placeholder="Image Link" required />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input placeholder:text-gray-500 bg-white border-gray-300" placeholder={userInfo.email} disabled required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input placeholder:text-gray-500 bg-white border-gray-300" placeholder="Password" value="123456789" disabled required />
                            {/* <label className="label">Confirm Password</label>
                            <input type={eye ? "text" : "password"} name='confirmPassword' className="input" placeholder="Password" required /> */}

                            <button className="btn btn-primary text-white mt-4 ">Update Info</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default UpdateInfo;