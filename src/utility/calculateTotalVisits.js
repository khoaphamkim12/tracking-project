// @ts-nocheck
export function calculateTotalVisits(dailyVisits) {
    try {
        return Object.values(dailyVisits).reduce((sum, count) => sum + count, 0);
    } catch (error) {
        console.log(error)
        return null
    }

}