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

// Landing
import Home2 from '../layouts/Home2';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATH.home} element={<Home2 />} />
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
