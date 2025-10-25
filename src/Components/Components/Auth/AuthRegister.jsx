import { Eye, EyeClosed } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import AuthProvider from '../../Contexts/AuthProvider';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from "motion/react"

const AuthRegister = () => {
    const navagation = useNavigate()


    const { createAccountEmailPass, updateUserInfo, userInfo, setUser, loading, googleSignIn } = useContext(AuthContext)

    useEffect(() => {
        if (userInfo) {
            navagation("/");
        }

    }, [userInfo, navagation]);


    const [passLength, setPassLength] = useState(false)
    const [hasUpper, setHasUpper] = useState(false)
    const [hasLower, setHasLower] = useState(false)

    const [eye, setEye] = useState(false)


    const checkEye = () => {
        setEye(!eye)
    }

    const CreateAccountWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const imgLink = e.target.imgLink.value;

        if (passLength && hasUpper && hasLower) {
            createAccountEmailPass(email, password)
                .then(result => {
                    updateUserInfo(name, imgLink)
                        .then(() => {
                            setUser(result.user)
                            toast("Successfully Account Created!", { style: { background: "#12d369", color: "white" } })
                        }).catch(error => {
                            toast("An error occured while updating the profile!", { style: { background: "#ff4d4d", color: "white" } })
                        })
                }).catch(error => {
                    toast("An error occured while createing the account, try again!", { style: { background: "#ff4d4d", color: "white" } })
                })
        } else{
            toast("Please Fill The Password Requirements, Then Try Again!", { style: { background: "#ff4d4d", color: "white" } })
        }

    }

    const signInGoogle = () => {
        googleSignIn()
            .then(result => {
                toast("Successfully Logged in", { style: { background: "#12d369", color: "white" } })
            }).catch(error => {
                toast("An error occured while logging in, try again!", { style: { background: "#ff4d4d", color: "white" } })
            })
    }


    const validatePassword = (e) => {
        const password = e.target.value;

        if (password.length < 6) {
            setPassLength(false)
        } else {
            setPassLength(true)
        }

        if (!/[A-Z]/.test(password)) {
            setHasUpper(false)
        } else {
            setHasUpper(true)
        }

        if (!/[a-z]/.test(password)) {
            setHasLower(false)
        } else {
            setHasLower(true)
        }
    };

    return (
        <motion.div
        initial={{ scale: 0 }} animate={{ scale: 1 }}

        className='flex flex-col gap-5 justify-center items-center lg:h-[90vh] mx-3 lg:mx-0'>
            <ToastContainer hideProgressBar={true}></ToastContainer>
            <title>GameHub - Register</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold mb-2'>Account <span className='text-primary'>Register</span></h2>
                    <form onSubmit={CreateAccountWithEmail}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label">Profile Image</label>
                            <input type="text" name='imgLink' className="input" placeholder="Image Link" required />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input onChange={validatePassword} type={eye ? "text" : "password"} name='password' className="input" placeholder="Password" required />

                            {
                                eye ? <Eye onClick={checkEye} className='absolute bottom-[197px] right-[50px] cursor-pointer' /> : <EyeClosed onClick={checkEye} className='absolute bottom-[197px] right-[50px] cursor-pointer' />
                            }

                            <ul className='list-disc text-left ml-10 mt-2 text-[12px]'>
                                <li className={passLength ? "text-green-500" : "text-red-500"}>Must be 6 Characters or More</li>
                                <li className={hasUpper ? "text-green-500" : "text-red-500"}>Must have 1 Uppercase</li>
                                <li className={hasLower ? "text-green-500" : "text-red-500"}>Must have 1 Lowercase</li>
                            </ul>

                            <button className="btn btn-primary text-white mt-4">Register</button>
                            <div className='mt-2 flex justify-between'>
                                <NavLink className="link link-hover text-primary font-semibold" to={"/Auth/Login"}>Already Have An Account? </NavLink>
                                <NavLink className="link link-hover text-gray-800 font-semibold" to={"/Auth/Forgot"}>Forgot Password?</NavLink>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <span className='flex justify-center items-center gap-4'><p className='w-[100px] h-0.5 bg-gray-200'></p> or <p className='w-[100px] h-0.5 bg-gray-200'></p></span>
            <button onClick={signInGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </motion.div>
    );
};

export default AuthRegister;