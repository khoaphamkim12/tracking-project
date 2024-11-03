
// @ts-ignore
export default function convertDataChartTotalClickByDate(inputData) {
    try {
        const labels = Object.keys(inputData); // Lấy các ngày
        const dataValues = Object.values(inputData); // Lấy các giá trị tương ứng

        return {
            labels: labels,
            datasets: [{
                label: 'Số lần nhấp',
                data: dataValues,
                fill: false, // Không điền màu bên dưới đường
                borderColor: 'rgba(75, 192, 192, 1)', // Màu của đường
                tension: 0.1, // Độ cong của đường
                borderWidth: 2,
            }]
        };
    } catch (error) {
        console.log(error)
        return null
    }

}
