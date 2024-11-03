// @ts-nocheck
import { useEffect, useState } from 'react';

function useLocalStorage(key) {
    // Khởi tạo state với giá trị từ localStorage
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error("Error reading localStorage key “" + key + "”: ", error);
            return null;
        }
    });

    useEffect(() => {
        // Cập nhật giá trị state khi key trong localStorage thay đổi
        const handleStorageChange = () => {
            try {
                const item = localStorage.getItem(key);
                setValue(item ? JSON.parse(item) : null);
            } catch (error) {
                console.error("Error reading localStorage key “" + key + "”: ", error);
            }
        };

        // Lắng nghe sự kiện 'storage' (chỉ hoạt động cho tab khác)
        window.addEventListener('storage', handleStorageChange);
        // Cleanup listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);

    const setLocalStorageValue = (newValue) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting localStorage key “" + key + "”: ", error);
        }
    };

    return [value, setLocalStorageValue];
}

export default useLocalStorage;
