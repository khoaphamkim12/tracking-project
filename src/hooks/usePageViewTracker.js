// @ts-nocheck
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageViewTracker() {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const currentDate = new Date().toISOString().split('T')[0]; // Ngày hiện tại (YYYY-MM-DD)
        console.log('User navigated to:', currentPath, 'on', currentDate);

        // Lấy dữ liệu từ localStorage
        const pageData = JSON.parse(localStorage.getItem('pageViews') || "{}") || {};

        // Nếu chưa có dữ liệu cho ngày hiện tại, khởi tạo đối tượng mới
        if (!pageData[currentDate]) {
            pageData[currentDate] = {};
        }

        // Tăng số lần truy cập cho URL cụ thể trong ngày hiện tại
        pageData[currentDate][currentPath.toString()] = (pageData[currentDate][currentPath] || 0) + 1;

        // Lưu lại dữ liệu vào localStorage
        localStorage.setItem('pageViews', JSON.stringify(pageData));
    }, [location]);

    return null;
}

export default usePageViewTracker;
