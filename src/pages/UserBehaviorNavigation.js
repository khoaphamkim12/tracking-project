/* eslint-disable no-unused-vars */
// @ts-nocheck
import { UserBehaviorNavigationStyle } from 'styles/UserBehaviorNavigationStyle';
import React, { useEffect } from 'react';
import { Button } from 'styles/Object/Button';
import useLocalStorage from 'hooks/useLocalStorage';
import PieChart from 'components/PieChart';
import PieChartPageNavigator from 'components/PieChartPageNavigator';
import CustomBarChart from 'components/CustomBarChart';
import BoxViewTotalClick from 'components/BoxViewTotalClick';
import BoxViewTotalNavigation from 'components/BoxViewTotalNavigation';

const UserBehaviorNavigation = () => {

    const [timeSpent, setTimeSpent] = useLocalStorage('timeSpent')

    const hours = Math.floor(timeSpent / 3600);
    const minutes = Math.floor((timeSpent % 3600) / 60);
    const seconds = timeSpent % 60;
    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <UserBehaviorNavigationStyle>
            <div className="box-main">
                <div className="cols">
                    <BoxViewTotalClick />
                    <BoxViewTotalNavigation />
                    <BoxViewTotalClick />
                    <BoxViewTotalNavigation />
                </div>
            </div>
            <div className="box">
                <div className='box-overall'>
                    <div className="box-container">
                        <div className="box-overall-left">
                            <h2 className="title-box">Home page analysis table</h2>
                            <h4 className='subtitle-box'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h4>
                            <div className='buttons'>
                                <Button>
                                    Home page access time: &nbsp;
                                    {formatTime(hours)}h:
                                    {formatTime(minutes)}m:
                                    {formatTime(seconds)}s</Button>
                            </div>
                        </div>
                        <div className="box-overall-right">
                            <img src='/image/rocket.png' alt='Rocket ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-admin'>
                <div className='box-top-left'>
                    <h2 className="title">User Behavior Navigation</h2>
                    <CustomBarChart />

                </div>
                <div className='box-top-right'>
                    <h2 className="title">Total Navigation</h2>
                    <PieChartPageNavigator />
                </div>
            </div>

        </UserBehaviorNavigationStyle>
    );
};

export default UserBehaviorNavigation;
