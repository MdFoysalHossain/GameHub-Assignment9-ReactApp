import React, { use } from 'react';
import { NavLink } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext';
import { motion } from "motion/react"

const AuthForgot = () => {

    const {userInfo, forgotPassword}  = use(AuthContext)


    const userForgotPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgotPassword(email)
            .then(result => {
                toast("Password Reset was Successful", { style: { background: "#12d369", color: "white" } })
                window.open("http://gmail.com/", "_blank")
            })
            .catch(error => {
                toast("An error occured while trying to reset password, try again!", {style: {background: "#ff4d4d", color: "white"}})
            })

    }

    return (
        <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
        className='flex justify-center items-center lg:h-[80vh] mb-20 lg:mb-0 mx-3 lg:mx-0 my-10'>
            <ToastContainer hideProgressBar={true}></ToastContainer>
            <title>GameHub - Forgot Password</title>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold mb-2'>Password <span className='text-primary'> Reset</span></h2>
                    <form onSubmit={userForgotPassword}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <button className="btn btn-primary text-white mt-4">Request Password Reset</button>
                            <div className='mt-2 flex flex-col gap-2 md:flex-row justify-between'>
                                <NavLink className="link link-hover text-primary font-semibold" to={"/Auth/Register"}>Register a New Account</NavLink>
                                <NavLink className="link link-hover text-gray-800 font-semibold" to={"/Auth/Login"}>Alraedy Have an Account?</NavLink>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            
        </motion.div>
    );
};

export default AuthForgot;