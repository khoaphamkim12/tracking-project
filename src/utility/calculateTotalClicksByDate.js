// @ts-ignore
export function calculateTotalClicksByDate(data) {
    try {
        let totalClicksByDate = {};

        for (let element in data) {
            for (let date in data[element]) {
                if (data[element][date].clicked) {
                    // @ts-ignore
                    if (!totalClicksByDate[date]) {
                        // @ts-ignore
                        totalClicksByDate[date] = 0;
                    }
                    // @ts-ignore
                    totalClicksByDate[date] += data[element][date].clicked;
                }
            }
        }

        return totalClicksByDate;
    } catch (error) {
        console.log(error)
        return null
    }

}