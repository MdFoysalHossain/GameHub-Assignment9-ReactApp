import React from 'react';
import Error404Logo from "../../../assets/error-404.png"
import Footer from '../../Public/Footer';
import Navbar from '../../Public/Navbar';

const Error404 = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className='flex flex-col gap-5 justify-center items-center h-[80vh]'>
                <img src={Error404Logo} alt="404 Not Found" />
                <h2 className='text-4xl font-semibold'>Page Not Found</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error404;