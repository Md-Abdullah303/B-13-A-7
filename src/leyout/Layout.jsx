import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../components/sheared/Navber/Navber';
import Footer from '../components/sheared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;