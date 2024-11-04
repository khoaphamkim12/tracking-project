// @ts-nocheck
/* eslint-disable no-prototype-builtins */
import { getRandomColor } from "./getRandomColor";
import { keyMapTag } from "./keyMapTag";

// @ts-nocheck
export const convertClickDataLineChart = (inputData) => {
    const result = {
        labels: [], // Nhãn cho trục X
        datasets: []
    };

    // Khai báo các loại dữ liệu bạn muốn tạo datasets cho
    const keys = Object.keys(inputData);

    // Duyệt qua từng loại dữ liệu để tạo datasets
    keys.forEach(key => {
        const dataset = {
            label: keyMapTag[key] ? keyMapTag[key] : key, // Tên của loại dữ liệu
            data: [], // Dữ liệu cho dòng này
            fill: false, // Không tô màu dưới đường
            borderColor: getRandomColor(), // Màu đường
            tension: 0.5 // Độ cong của đường
        };

        // Duyệt qua từng ngày để thêm dữ liệu vào dataset
        for (const date in inputData[key]) {
            if (inputData[key].hasOwnProperty(date)) {
                // Thêm nhãn cho trục X nếu chưa có
                if (!result.labels.includes(date)) {
                    result.labels.push(date);
                }
                // Thêm giá trị clicked vào dữ liệu của dataset
                dataset.data.push(inputData[key][date].clicked);
            }
        }

        // Đảm bảo mỗi dataset có cùng số lượng dữ liệu
        // Nếu không có clicked cho một ngày nào đó, thêm 0
        for (let i = 0; i < result.labels.length; i++) {
            if (dataset.data[i] === undefined) {
                dataset.data[i] = 0; // Nếu không có giá trị, thêm 0
            }
        }

        result.datasets.push(dataset);
    });

    return result;
};