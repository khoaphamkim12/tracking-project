// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { MousePathVisualizerStyle } from 'styles/MousePathVisualizerStyle';

const MousePathVisualizer = () => {
    const [mousePath, setMousePath] = useState([]);
    const [timeUp, setTimeUp] = useState({ hours: 0, minutes: 0, seconds: 0 })
    const svgRef = useRef();
    const maxPathLength = 10000;

    // @ts-ignore
    const handleMouseMove = (event) => {
        const newPosition = {
            x: event.clientX + window.scrollX, // Cộng thêm vị trí cuộn theo chiều ngang
            y: event.clientY + window.scrollY, // Cộng thêm vị trí cuộn theo chiều dọc
        };

        // @ts-ignore
        setMousePath((prevPath) => {
            // Nếu số lượng vị trí đã đạt tối đa, xóa vị trí đầu tiên
            const updatedPath = [...prevPath, newPosition];
            return updatedPath.length > maxPathLength ? updatedPath.slice(1) : updatedPath;
        });
    };

    // Thêm event listener khi component được gắn và dọn dẹp khi huỷ bỏ
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setTimeUp((prevTime) => {
                const newSeconds = prevTime.seconds + 1;
                const newMinutes = Math.floor(newSeconds / 60);
                const newHours = Math.floor(newMinutes / 60);
                return {
                    hours: newHours,
                    minutes: newMinutes % 60,
                    seconds: newSeconds % 60,
                };
            });
        }, 1000);
        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [timeUp]);

    // Hàm vẽ đường đi của chuột
    const drawPath = (width, height) => {

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove(); // Xóa nội dung SVG trước khi vẽ lại

        if (mousePath.length < 2) return; // Không đủ điểm để vẽ

        // Tạo tỷ lệ cho biểu đồ

        const xScale = d3.scaleLinear()
            .domain([0, window.innerWidth + window.scrollX])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, window.innerHeight + window.scrollY])
            .range([0, height]); // Đảo ngược trục Y

        // Tạo đường path từ các điểm
        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y));

        svg.append('path')
            .datum(mousePath)
            .attr('d', line)
            .attr('stroke', '#A57DC1')
            .attr('stroke-width', 2)
            .attr('fill', 'none');

        // Vẽ các điểm trên đường đi
        svg.selectAll('circle')
            .data([mousePath[mousePath.length - 1]])
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d.x))
            .attr('cy', d => yScale(d.y))
            .attr('r', 3)
            .attr('fill', '#05bd93');
    };

    useEffect(() => {
        const width = window.innerWidth >= 768 ? 430 : 223
        const height = window.innerWidth >= 768 ? 255 : 131
        console.log(width, height)
        drawPath(width, height); // Vẽ đường đi mỗi khi mousePath thay đổi
    }, [mousePath]);

    return (
        <MousePathVisualizerStyle>
            <div className='laptop'>
                <div className='overlay'>
                    <img src='/image/laptop-screen.png' />
                </div>
                <div className='laptop-screen'>
                    <svg ref={svgRef} width="430" height="255" style={{ border: '1px solid black' }} />
                    <div className='count-up'>
                        <p className='time'>
                            {String(timeUp.hours).padStart(2, '0')}:
                            {String(timeUp.minutes).padStart(2, '0')}:
                            {String(timeUp.seconds).padStart(2, '0')}
                        </p>
                    </div>
                </div>

            </div>
        </MousePathVisualizerStyle>
    );
};

export default MousePathVisualizer;