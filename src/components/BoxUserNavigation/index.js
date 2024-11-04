/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import DonutChartClickAnalytics from '../DonutChartClickAnalytics'
import useLocalStorage from 'hooks/useLocalStorage'
import { convertClickDataDonutChart } from 'utility/convertClickDataDonutChart'
import ClickDataLineChart from '../ClickDataLineChart'
import { convertClickDataLineChart } from 'utility/convertClickDataLineChart'

export default function BoxUserNavigation() {
    const [clickData, setClickData] = useLocalStorage('clickData')
    const [dataChart, setDataChart] = useState(null)
    const [dataChartLine, setDataChartLine] = useState(null)
    useEffect(() => {
        setDataChart(convertClickDataDonutChart(clickData))
        setDataChartLine(convertClickDataLineChart(clickData))
    }, [clickData])
    return (
        <div className='box-content'>
            <h2 className='title'>Behavior Analytics</h2>
            <div className='box-wrap'>
                <div className="box-left">
                    <DonutChartClickAnalytics data={dataChart} />
                </div>
                <div className="box-right">
                    <ClickDataLineChart data={dataChartLine} />
                </div>
            </div>
        </div>
    )
}
