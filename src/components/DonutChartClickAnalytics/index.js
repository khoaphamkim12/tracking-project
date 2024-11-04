/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartClickAnalytics = ({ data }) => {

    // Tùy chọn biểu đồ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
            },
        },
    };

    return data ? <Doughnut data={data} options={options} /> : "";
};

export default DonutChartClickAnalytics;
