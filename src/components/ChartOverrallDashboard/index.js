/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// Dữ liệu gốc
const rawData = {
    FORM_SUBMIT: { '2024-11-03': { clicked: 19 } },
    A: { '2024-11-03': { clicked: 107 } },
    TEXTAREA: { '2024-11-03': { clicked: 11 } },
    INPUT: { '2024-11-03': { clicked: 15 } },
    BUTTON: { '2024-11-03': { clicked: 32 } },
};

// Hàm chuyển đổi dữ liệu
const transformData = (data, name) => {
    const labels = Object.keys(data[name]); // Lấy các ngày từ dữ liệu
    const dataset = {
        label: name,
        data: labels.map((date) => data[name][date].clicked), // Số lượng clicked cho mỗi ngày
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: false,
    };

    return { labels, datasets: [dataset] };
};

const ChartOverrallDashboard = ({ rawData, name }) => {
    // Dữ liệu đã được chuyển đổi cho key cụ thể
    const chartData = transformData(rawData, name);

    // Tùy chọn cho biểu đồ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Ngày',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Số lượng clicked',
                },
                beginAtZero: true,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default ChartOverrallDashboard;
