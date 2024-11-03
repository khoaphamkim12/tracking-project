// @ts-nocheck
export const getNameByPath = (routes, path) => {
    for (const key in routes) {
        if (routes[key].path === path) {
            return routes[key].name + ' Page';
        }
    }
    return null; // Trả về null nếu không tìm thấy
};