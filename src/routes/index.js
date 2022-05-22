/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_PATH, ROLES } from '../constants/';

import ProtectedRoutes from './ProtectedRoutes';
import SignIn from '../layouts/SignIn';
import AdminDashboard from '../layouts/AdminDashboard';
import Missing from '../layouts/Missing';
import Unauthorized from '../layouts/Unauthorized';
import PrepareWorkout from '../layouts/PrepareWorkout';
import MonitoringWorkout from '../layouts/MonitoringWorkout';
import UserList from '../layouts/UserList';
import DifficulityList from '../layouts/DifficulityList';
import FinishedWorkout from '../layouts/FinishedWorkout';
import RecordList from '../layouts/RecordList';

// Landing Page
import Home2 from '../layouts/Home2';
import Home3 from '../layouts/Home3';
import Home3_CommingSoon from '../layouts/Home3/views/coming-soon';
import Home3_Profile from '../layouts/Home3/views/profile';
import Home3_Home from '../layouts/Home3/views/home';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATH.home} element={<Home2 />} />
            <Route path="/home3" element={<Home3 />}>
                <Route element={<Home3_Home />} path="" />
                <Route element={<Home3_CommingSoon />} path="coming-soon" />
                <Route exact element={<Home3_Profile />} path="profile" />
            </Route>
            <Route path={ROUTE_PATH.sign_in} element={<SignIn />} />
            <Route path={ROUTE_PATH.unauthorized} element={<Unauthorized />} />

            {/* only Admin can visit */}
            <Route element={<ProtectedRoutes allowedRoles={[ROLES.Admin]} />}>
                <Route
                    path={ROUTE_PATH.admin_dashbaord}
                    element={<AdminDashboard />}
                />
                <Route
                    path={ROUTE_PATH.prepare_workout}
                    element={<PrepareWorkout />}
                />
                <Route
                    path={`${ROUTE_PATH.monitoring_workout}/:recordId`}
                    element={<MonitoringWorkout />}
                />
                <Route path={ROUTE_PATH.user_list} element={<UserList />} />
                <Route
                    path={`${ROUTE_PATH.record_list}/:userId`}
                    element={<RecordList />}
                />
                <Route
                    path={ROUTE_PATH.difficulty_list}
                    element={<DifficulityList />}
                />
                <Route
                    path={`${ROUTE_PATH.finsished_workout}/:recordId`}
                    element={<FinishedWorkout />}
                />
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default AppRoutes;
