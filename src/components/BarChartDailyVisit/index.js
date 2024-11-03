/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết cho Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Biểu đồ cột
const BarChartDailyVisit = ({ dailyVisits }) => {

    // Chuyển đổi dữ liệu thành định dạng biểu đồ
    const chartData = {
        labels: Object.keys(dailyVisits || {}), // Ngày
        datasets: [
            {
                label: '',
                data: Object.values(dailyVisits || {}), // Số lần chuyển trang
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Màu nền cột
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Ẩn chú giải
            },
            tooltip: {
                enabled: true, // Hiển thị tooltip khi di chuột qua cột
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false, // Ẩn đường lưới trên trục X
                },
                barPercentage: 0.7, // Điều chỉnh độ rộng của cột
                categoryPercentage: 0.5,
            },
            y: {
                display: false,
                grid: {
                    display: false, // Ẩn đường lưới trên trục Y
                },
                beginAtZero: true, // Bắt đầu trục Y từ 0
            },
        },
    };

    return dailyVisits ? <Bar data={chartData} options={options} /> : "";
};

export default BarChartDailyVisit;