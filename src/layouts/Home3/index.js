/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Route, Outlet } from 'react-router-dom';

import './style.css';
import ComingSoon from './views/coming-soon';
import Profile from './views/profile';
import Home from './views/home';
import { Helmet } from 'react-helmet';

const Home3 = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
                    data-tag="font"
                />
            </Helmet>
            <Outlet />
        </>
    );
};

export default Home3;
