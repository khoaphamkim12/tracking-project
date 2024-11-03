// @ts-nocheck
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useClickTracker() {
    const listTagTrack = ['A', 'INPUT', 'TEXTAREA', 'BUTTON']
    const [clickDataLocal, setClickDataLocal] = useLocalStorage('clickData')
    const handleClick = (event) => {
        const dateNum = new Date().toISOString().split('T')[0];
        const clickedElement = event.target;
        const elementType = clickedElement.tagName;
        const clickData = clickDataLocal || {};

        if (listTagTrack.includes(elementType)) {
            if (!clickData?.[elementType]) {
                clickData[elementType] = {}
            }
            if (!clickData?.[elementType]?.[dateNum]) {
                clickData[elementType][dateNum] = {}
            }
            clickData[elementType][dateNum].clicked = (clickData[elementType][dateNum].clicked || 0) + 1;
            setClickDataLocal(clickData);

        }

    };

    // Gắn sự kiện click toàn cục
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return null; // Hook không trả về UI
}

export default useClickTracker;
