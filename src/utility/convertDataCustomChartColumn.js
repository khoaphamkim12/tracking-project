// @ts-nocheck
import { AppRoute } from "App";
import { getNameByPath } from ".";

// @ts-nocheck
export const convertDataCustomChartColumn = (data) => {
    try {
        const labels = Object.keys(data); // Nhãn là các ngày
        const allLinks = new Set(); // Sử dụng Set để giữ các đường dẫn duy nhất

        // Tập hợp tất cả các đường dẫn
        labels.forEach(date => {
            Object.keys(data[date]).forEach(link => {
                allLinks.add(link);
            });
        });

        // Chuyển đổi Set thành mảng
        const linksArray = Array.from(allLinks);
        const datasets = linksArray.map(link => {
            const dataPoints = labels.map(date => data[date][link] || 0); // Lấy số liệu cho từng ngày, sử dụng 0 nếu không có
            return {
                label: getNameByPath(AppRoute, link),
                key: link,
                data: dataPoints,
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`, // Màu nền ngẫu nhiên
            };
        });

        return {
            labels: labels,
            datasets: datasets,
        };
    } catch (error) {
        return null
    }

};