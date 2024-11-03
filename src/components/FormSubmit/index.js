import { FormSubmitStyle } from 'styles/FormSubmitLayout'
import React from 'react'
import MousePathVisualizer from '../MousePathVisualizer'
import Form from './Form'


export default function FormSubmit() {
    return (
        <FormSubmitStyle>
            <div className='banner-overlay '>
                <img src='/image/image.svg' alt='Tracking Home' />
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={1440} height={150} preserveAspectRatio="none" viewBox="0 0 1440 250"><g mask="url(&quot;#SvgjsMask1036&quot;)" fill="none"><path d="M 0,214 C 96,194 288,120.8 480,114 C 672,107.2 768,201.4 960,180 C 1152,158.6 1344,41.6 1440,7L1440 250L0 250z" fill="rgba(255, 255, 255, 1)" /></g><defs><mask id="SvgjsMask1036"><rect width={1440} height={250} fill="#ffffff" /></mask></defs></svg>
                </div>
            </div>
            <div className='box'>
                <div className="box-panel">
                    <div className='box-content'>
                        <div className='box-subtitle'>
                            <h6>User Template</h6>
                        </div>
                        <div className='box-title'><h1>Leading Digital Business</h1></div>
                        <MousePathVisualizer />
                    </div>
                    <div className='box-form'>
                        <Form />
                    </div>
                </div>
            </div>
        </FormSubmitStyle>
    )
}
