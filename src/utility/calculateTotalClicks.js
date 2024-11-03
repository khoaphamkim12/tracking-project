// @ts-nocheck
export function calculateTotalClicks(data) {
    try {
        let totalClicks = 0;
        for (let element in data) {
            for (let date in data[element]) {
                if (data[element][date].clicked) {
                    totalClicks += data[element][date].clicked;
                }
            }
        }

        return totalClicks;
    } catch (error) {
        console.log(error)
        return null
    }

}