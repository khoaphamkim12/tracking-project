// @ts-nocheck
export function calculateDailyVisits(data) {
    try {
        const dailyVisits = {};

        for (const [date, pages] of Object.entries(data)) {
            const dailyCount = Object.values(pages).reduce((sum, count) => sum + count, 0);
            dailyVisits[date] = dailyCount;
        }

        return dailyVisits;
    } catch (error) {
        console.log(error)
        return null
    }

}