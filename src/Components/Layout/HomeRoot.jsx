import React from 'react';
import Navbar from '../Public/Navbar';
import { Outlet } from 'react-router';

const HomeRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeRoot;