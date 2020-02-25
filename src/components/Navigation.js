import React from 'react'
import logo from "../img/logo.png"

export default function Navigation() {
    return (
        <nav>
            <div className="left"></div>
            <img src={logo} alt="logo" />
            <div className="right"></div>
        </nav>
    )
}
