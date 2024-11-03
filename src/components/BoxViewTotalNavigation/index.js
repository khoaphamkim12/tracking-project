/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'
import { formatNumber } from 'utility/formatNumber'
import { calculateDailyVisits } from 'utility/calculateDailyVisits'
import { calculateTotalVisits } from 'utility/calculateTotalVisits'
import BarChartDailyVisit from '../BarChartDailyVisit'

export default function BoxViewTotalNavigation() {
    const [pageViews, setPageViews] = useLocalStorage('pageViews')
    const [dataChart, setDataChart] = useState(null)
    const [totalView, setTotalView] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const dataViewChart = calculateDailyVisits(pageViews)
        setDataChart(dataViewChart)
        setTotalView(calculateTotalVisits(dataViewChart))
        setLoading(false)

    }, [pageViews, loading])
    const number = formatNumber(totalView)
    return (
        <div className="col-4">
            <h3 className='title danger'>Navigation</h3>
            <div className="cols absolute">
                <div className="col-2 center"><h2>{!loading ? number : ""}</h2></div>
                <div className="col-2 ">
                    <BarChartDailyVisit dailyVisits={dataChart} />
                </div>
            </div>
        </div>
    )
}
