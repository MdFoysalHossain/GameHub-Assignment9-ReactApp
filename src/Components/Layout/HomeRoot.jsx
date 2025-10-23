import React from 'react';
import Navbar from '../Public/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Public/Footer';
import { motion } from "motion/react"

const HomeRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeRoot;