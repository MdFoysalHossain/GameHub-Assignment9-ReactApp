import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const AuthRegister = () => {
    const [eye, setEye] = useState(false)
    
        const checkEye = () => {
            setEye(!eye)
        }
    return (
        <div className='flex justify-center items-center h-[90vh]'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold mb-2'>Account <span className='text-primary'>Login</span></h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type={eye ? "text" : "password"} name='password' className="input" placeholder="Password" required />

                        {
                            eye ? <Eye onClick={checkEye} className='absolute bottom-[130px] right-[50px] cursor-pointer' /> : <EyeClosed onClick={checkEye} className='absolute bottom-[130px] right-[50px] cursor-pointer' />
                        }

                        <button className="btn btn-neutral mt-4">Login</button>
                        <div className='mt-2'>Dont Have An Account? <NavLink className="link link-hover text-primary font-semibold">Register</NavLink></div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default AuthRegister;