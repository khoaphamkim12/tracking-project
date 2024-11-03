/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import useLocalStorage from 'hooks/useLocalStorage';
import { convertDataCustomChartColumn } from 'utility/convertDataCustomChartColumn';

// Đăng ký các thành phần Chart.js cần thiết
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomBarChart = () => {
    const [data, setData] = useLocalStorage('pageViews')
    const [dataChart, setDataChart] = useState(null)
    useEffect(() => {
        setDataChart(convertDataCustomChartColumn(data))
        console.log(data)
    }, [data])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },

        },
    };

    return dataChart ? <Bar data={dataChart} options={options} /> : <div></div>;
};

export default CustomBarChart;
