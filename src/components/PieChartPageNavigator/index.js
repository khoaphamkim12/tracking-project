/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import PieChart from '../PieChart'
import useLocalStorage from 'hooks/useLocalStorage'
import { AppRoute } from 'App'
import { getNameByPath } from 'utility'

export default function PieChartPageNavigator() {
    const [pageViews, setPageViews] = useLocalStorage('pageViews')
    const [dataPie, setDataPie] = useState([])
    useEffect(() => {
        const totalValues = {};
        const pageViewObject = pageViews || {}
        for (const date in pageViewObject) {
            const links = pageViewObject[date];
            for (const link in links) {
                if (totalValues[link]) {
                    totalValues[link] += links[link];
                } else {
                    totalValues[link] = links[link];
                }
            }
        }

        // Chuyển đổi object thành mảng gồm key và value
        const totalArray = Object.entries(totalValues).map(([link, total]) => ({
            key: link,
            value: total,
            label: getNameByPath(AppRoute, link)
        }));
        setDataPie(totalArray)

    }, [])
    return (
        <PieChart data={dataPie} />
    )
}
