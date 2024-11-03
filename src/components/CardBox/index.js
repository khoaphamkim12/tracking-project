/* eslint-disable react/prop-types */
// @ts-nocheck

import { CardBoxStyle } from 'styles/Object/CardBoxStyle'
import React from 'react'

export default function CardBox({ icon, title, number }) {
    const numberText = (item) => {
        const num = Number(item)
        // eslint-disable-next-line no-undef
        return Intl.NumberFormat().format(num)
    }
    return (
        <CardBoxStyle className='box'>
            <div className='icon'>
                <img src={icon} alt={title} />
            </div>
            <h6 className="box-title">
                {title}
            </h6>
            <div className='div-tag'></div>
            <div>
                <h3 className='box-large-title'>{numberText(number)}</h3>
            </div>
        </CardBoxStyle>
    )
}
