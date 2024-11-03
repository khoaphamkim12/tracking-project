/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import LineChartTotalClickCusTom from '../LineChartTotalClickCusTom'
import useLocalStorage from 'hooks/useLocalStorage'
import { calculateTotalClicksByDate } from 'utility/calculateTotalClicksByDate'
import convertDataChartTotalClickByDate from 'utility/convertDataChartTotalClickByDate'
import { formatNumber } from 'utility/formatNumber'
import { calculateTotalClicks } from 'utility/calculateTotalClicks'

export default function BoxViewTotalClick() {
    const [clickData, setClickData] = useLocalStorage('clickData')
    const [dataChart, setDataChart] = useState(null)
    const [totalClick, setTotalClick] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTotalClick(calculateTotalClicks(clickData))
        const dataClickByDate = calculateTotalClicksByDate(clickData)
        setDataChart(convertDataChartTotalClickByDate(dataClickByDate))
        setLoading(false)
    }, [clickData, loading])
    const number = formatNumber(totalClick)
    return (
        <div className="col-4">
            <h3 className='title primary'>Clicked</h3>
            <div className="cols absolute">
                <div className="col-2 center"><h2>{!loading ? number : ""}</h2></div>
                <div className="col-2 ">
                    <LineChartTotalClickCusTom data={dataChart} />
                </div>
            </div>
        </div>
    )
}
