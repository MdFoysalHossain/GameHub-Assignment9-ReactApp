import { Eye, EyeClosed } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import AuthProvider from '../../Contexts/AuthProvider';
import { AuthContext } from '../../Contexts/AuthContext';

const AuthRegister = () => {

    const {createAccountEmailPass, updateUserInfo, user, setUser} = useContext(AuthContext)
    // console.log(createAccountEmailPass)

    const [eye, setEye] = useState(false)

    console.log(user)

    const checkEye = () => {
        setEye(!eye)
    }

    const CreateAccountWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const name = e.target.name.value;
        const imgLink = e.target.imgLink.value;

        console.log(email, password, confirmPassword, name, imgLink)
        createAccountEmailPass(email, password)
        .then(result => {
            // console.log("User:", result)
            updateUserInfo(name, imgLink)
                .then(()=> {
                    console.log("Updated User Info:", result)
                    setUser(result.user)
                }) .catch(error => {
                    console.log("Error Updating:", error)
                })
        }) .catch(error => {
            console.log("Error SignUp:", error)
        })
    }

    return (
        <div className='flex flex-col gap-5 justify-center items-center h-[90vh]'>

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
                            <input type={eye ? "text" : "password"} name='password' className="input" placeholder="Password" required />
                            <label className="label">Confirm Password</label>
                            <input type={eye ? "text" : "password"} name='confirmPassword' className="input" placeholder="Password" required />

                            {
                                eye ? <Eye onClick={checkEye} className='absolute bottom-[130px] right-[50px] cursor-pointer' /> : <EyeClosed onClick={checkEye} className='absolute bottom-[130px] right-[50px] cursor-pointer' />
                            }

                            <button className="btn btn-neutral mt-4">Register</button>
                            <div className='mt-2'>Already Have An Account? <NavLink className="link link-hover text-primary font-semibold" to={"/Auth/Login"}>Login</NavLink></div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <span className='flex justify-center items-center gap-4'><p className='w-[100px] h-0.5 bg-gray-200'></p> or <p className='w-[100px] h-0.5 bg-gray-200'></p></span>
            <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    );
};

export default AuthRegister;