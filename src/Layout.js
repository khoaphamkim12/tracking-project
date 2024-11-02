/* eslint-disable react/prop-types */
import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { LayoutStyle } from './styles/Layout/LayoutStyle'

// @ts-ignore
export default function Layout({ children }) {
    return (
        <LayoutStyle>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </LayoutStyle>
    )
}
