import { Eye, EyeClosed } from 'lucide-react';
import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const AuthLogin = () => {
    const { userEmailLogin, googleSignIn } = use(AuthContext);

    const userLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userEmailLogin(email, password)
            .then(result => {
                console.log(result)
                toast("Successfully Logged In!", { style: { background: "#12d369", color: "white" } })
            }).catch(error => {
                if (error.message === "Firebase: Error (auth/invalid-credential).") {
                    toast("Credintial Does Not Match", {style: {background: "#ff4d4d", color: "white"}})
                } else{
                    console.log(error)
                    toast("An error occured while logging in, try again!", {style: {background: "#ff4d4d", color: "white"}})
                }
            })

    }

    const signInGoogle = () => {
        googleSignIn()
            .then(result => {
                // console.log("Google Signin Successful \n", result)
                toast("Login Successful", {style: {background: "#12d369", color: "white"}})
            }).catch(error => {
                console.log(error)
                toast("An error occured while logging in, try again!", {style: {background: "#ff4d4d", color: "white"}})
            })
    }

    const [eye, setEye] = useState(false)

    const checkEye = () => {
        setEye(!eye)
    }

    return (
        <div className='flex flex-col gap-5 justify-center items-center h-[90vh]'>
            <ToastContainer hideProgressBar={true}></ToastContainer>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold mb-2'>Account <span className='text-primary'>Login</span></h2>
                    <form onSubmit={userLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type={eye ? "text" : "password"} name='password' className="input" placeholder="Password" required />

                            {
                                eye ? <Eye onClick={checkEye} className='absolute bottom-[130px] right-[50px] cursor-pointer' /> : <EyeClosed onClick={checkEye} className='absolute bottom-[130px] right-[50px] cursor-pointer' />
                            }

                            <button className="btn btn-neutral mt-4">Login</button>
                            <div className='mt-2'>Dont Have An Account? <NavLink className="link link-hover text-primary font-semibold" to={"/Auth/Register"}>Register</NavLink></div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <span className='flex justify-center items-center gap-4'><p className='w-[100px] h-0.5 bg-gray-200'></p> or <p className='w-[100px] h-0.5 bg-gray-200'></p></span>
            <button onClick={signInGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    );
};

export default AuthLogin;