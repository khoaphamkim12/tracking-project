// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const ClickDataLineChart = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Biểu đồ Số lần Click',
            },

        },
    };

    return (
        data ? <Line data={data} options={options} /> : ""
    );
};

export default ClickDataLineChart;
