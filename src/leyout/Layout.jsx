import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../components/sheared/Navber/Navber';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Layout;