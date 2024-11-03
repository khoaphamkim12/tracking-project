// @ts-ignore
import React, { useEffect, useState } from 'react'
import { NavbarStyle } from '../../styles/NavbarStyle'
import { Link, useLocation } from 'react-router-dom'
import { AppRoute } from 'App'


export default function Navbar() {
    const [hideMenu, setHideMenu] = useState(true)
    const [scrolled, setScrolled] = useState(0)
    const location = useLocation()
    const pathName = location.pathname
    const handleScroll = () => {
        const position = window.scrollY;
        setScrolled(position)

    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            return window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <NavbarStyle >
            <div className={`navbar ${scrolled > 20 ? 'scrolled' : ''}`}>
                <div className='nav-container'>
                    <div className="navbar-left">
                        <div className='logo'>Logo</div>
                    </div>
                    <div className="navbar-right">
                        <ul className={`nav-link-list ${hideMenu ? 'hide' : ""}`}>
                            <li className={`nav-link ${AppRoute.home.path === pathName ? 'active' : ""}`}><Link to={AppRoute.home.path} className="nav-item">{AppRoute.home.name}</Link></li>
                            <li className={`nav-link ${AppRoute.userBehaviorNavigation.path === pathName ? 'active' : ""}`}><Link to={AppRoute.userBehaviorNavigation.path} className="nav-item">{AppRoute.userBehaviorNavigation.name}</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className='burger' onClick={() => {
                        setHideMenu(hideMenu ? false : true)
                        setScrolled(hideMenu ? 100 : 0)
                    }}>
                        <svg
                            className="w-[24px] h-[24px] xl:w-[66px] xl:h-[32px]"
                            viewBox="0 0 66 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.25 16H44.25"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>

                            <path
                                d="M8.25 8H44.25"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M8.25 24H44.25"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button></div>
            </div>
        </NavbarStyle>
    )
}
