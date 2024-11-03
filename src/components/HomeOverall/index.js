// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { HomeOverallStyle } from 'styles/HomeOverallStyle'
import CardBox from '../CardBox'
import useLocalStorage from 'hooks/useLocalStorage';
import { AppRoute } from 'App';

export default function HomeOverall() {
    // eslint-disable-next-line no-unused-vars
    const [clickData, setClickData] = useLocalStorage('clickData');
    // eslint-disable-next-line no-unused-vars
    const [navPages, setNavPages] = useLocalStorage('pageViews');
    const dateNum = new Date().toISOString().split('T')[0];
    const [btnCountClick, setBtnCountClick] = useState(0)
    const [inputCountClick, setInputCountClick] = useState(0)
    const [tagACountClick, setTagACountClick] = useState(0)
    const [textAreaCountClick, setTextAreaCountClick] = useState(0)
    const [formSubmitCountClick, setFormSubmitCountClick] = useState(0)
    const [visitHomePage, setVisitHomePage] = useState(0)

    useEffect(() => {
        setBtnCountClick(clickData?.BUTTON?.[dateNum]?.clicked || 0)
        setInputCountClick(clickData?.INPUT?.[dateNum]?.clicked || 0)
        setTagACountClick(clickData?.A?.[dateNum]?.clicked || 0)
        setTextAreaCountClick(clickData?.TEXTAREA?.[dateNum]?.clicked || 0)
        setFormSubmitCountClick(clickData?.FORM_SUBMIT?.[dateNum]?.clicked || 0)
        setVisitHomePage(navPages?.[dateNum]?.[AppRoute.home.path] || 0)
        console.log(navPages)
        console.log(dateNum)
    }, [clickData, navPages])

    return (
        <HomeOverallStyle>
            <div className="content">
                <h5>Services Checking Today</h5>
                <h2>Overall Check Behavior Navigation</h2>
                <p className="desc">
                    We would like to inform you that the following information is collected when you engage with and experience our services. This data helps us improve our offerings and provide you with a more personalized experience.
                </p>
            </div>
            <div className="box-container">
                <CardBox icon={'/image/link-icon.png'} title={' Click Form  Submit'} number={formSubmitCountClick} />
                <CardBox icon={'/image/click-icon.png'} title={' Click Button Page'} number={btnCountClick} />
                <CardBox icon={'/image/chip-icon.png'} title={' Click Input Page'} number={inputCountClick} />
                <CardBox icon={'/image/diamond-icon.png'} title={' Click Link Page'} number={tagACountClick} />
                <CardBox icon={'/image/gift-icon.png'} title={' Click Button Page'} number={textAreaCountClick} />
                <CardBox icon={'/image/submit-icon.png'} title={' Visit Home Page'} number={visitHomePage} />
            </div>
        </HomeOverallStyle>
    )
}
