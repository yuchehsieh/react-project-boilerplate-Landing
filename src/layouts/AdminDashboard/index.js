/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    TeamOutlined,
    SlidersOutlined,
    ProfileOutlined,
    RocketOutlined,
} from '@ant-design/icons';

import { ROUTE_PATH } from '../../constants';
import styles from './styles.module.scss';

import addOnImg from '../../assets-backstage/images/right-arrow.png';

const AdminDashboard = () => {
    const navigate = useNavigate();
    // const { pathname } = useLocation();

    const goUserList = () => {
        navigate(ROUTE_PATH.user_list);
    };

    const goDifficulityList = () => {
        navigate(ROUTE_PATH.difficulty_list);
    };

    const goRecordList = () => {
        navigate(`${ROUTE_PATH.record_list}/123`);
    };

    const goPrepareWorkout = () => {
        navigate(ROUTE_PATH.prepare_workout);
        // navigate(ROUTE_PATH.prepare_workout, { replace: true }); // 若要防止左滑上一頁
    };

    return (
        <div className={styles.container}>
            <legend>～選擇您的操作～</legend>
            <fieldset>
                <TileWithIconAndAction
                    icon={<TeamOutlined />}
                    label="騎乘者設定"
                    action={goUserList}
                />

                <TileWithIconAndAction
                    icon={<SlidersOutlined />}
                    label="騎乘關卡設定"
                    action={goDifficulityList}
                />

                <TileWithIconAndAction
                    icon={<ProfileOutlined />}
                    label="騎乘紀錄查詢"
                    action={goRecordList}
                />

                <TileWithIconAndAction
                    icon={<RocketOutlined />}
                    label="開始騎乘作業"
                    action={goPrepareWorkout}
                />
            </fieldset>
        </div>
    );
};

const TileWithIconAndAction = ({ icon, label, action }) => (
    <span className={styles.tile} onClick={action}>
        <span
            className={styles.addOn}
            style={{ backgroundImage: `url(${addOnImg})` }}
        ></span>
        <span className={styles.tileIcon}>{icon}</span>
        <span className={styles.tileLabel}>{label}</span>
    </span>
);

export default AdminDashboard;
