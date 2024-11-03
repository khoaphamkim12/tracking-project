/* eslint-disable react/prop-types */
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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const LineChartTotalClickCusTom = ({ data }) => {
    // Tùy chọn cho biểu đồ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top', // Vị trí của chú giải
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false, // Ẩn lưới ngang
                },
                ticks: {
                    display: false, // Ẩn nhãn ngày
                },
            },
            y: {
                display: false,
                title: {
                    display: false,
                    text: 'Số lượng', // Nhãn cho cột đứng
                },
                beginAtZero: true, // Bắt đầu từ 0
                grid: {
                    display: false, // Ẩn lưới dọc
                },
                ticks: {
                    display: false, // Ẩn nhãn ngày
                },
            },
        },
    };

    return data ? <Line data={data} options={options} /> : "";
};

export default LineChartTotalClickCusTom;
