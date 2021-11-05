import React from 'react'
import '../css/Header.css'
import Sun from '../images/sun.svg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title-container">
                <h1>devfinder</h1>
            </div>
            
            <div className="theme-container">
                <a href="/">LIGHT</a>
                <img src={Sun} alt="Sun icon"/>
            </div>
            
        </div>
    )
}

export default Header
