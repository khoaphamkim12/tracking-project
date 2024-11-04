/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
// @ts-nocheck

import { getRandomColor } from "./getRandomColor";
import { keyMapTag } from "./keyMapTag";


export const convertClickDataDonutChart = (inputData) => {
    try {
        const result = {
            labels: [],
            datasets: [{
                label: 'clicked',
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            }],
        };

        // Duyệt qua từng loại dữ liệu (FORM_SUBMIT, INPUT, A, BUTTON, TEXTAREA)
        for (const key in inputData) {
            if (inputData.hasOwnProperty(key)) {
                let totalClicked = 0;

                // Duyệt qua từng ngày để tính tổng số lần clicked
                for (const date in inputData[key]) {
                    if (inputData[key].hasOwnProperty(date)) {
                        totalClicked += inputData[key][date].clicked;
                    }
                }

                // Thêm key vào labels và tổng clicked vào data
                result.labels.push(keyMapTag[key] ? keyMapTag[key] : key);
                result.datasets[0].data.push(totalClicked);
                result.datasets[0].backgroundColor.push(getRandomColor());
                result.datasets[0].borderColor.push(getRandomColor());
            }
        }

        return result;
    } catch (error) {
        console.log(error)
        return null
    }

};

