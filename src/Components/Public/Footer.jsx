import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='flex w-full items-center justify-center my-10'>
            <h2 className='text-xl text-center'>Created by <NavLink className='font-bold'>Game<span className='text-primary'>Hub</span></NavLink></h2>
        </div>
    );
};

export default Footer;