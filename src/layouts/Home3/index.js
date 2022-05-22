/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Route, Outlet } from 'react-router-dom';

import './style.css';
import ComingSoon from './views/coming-soon';
import Profile from './views/profile';
import Home from './views/home';

const Home3 = () => {
    return <Outlet />
};

export default Home3;
