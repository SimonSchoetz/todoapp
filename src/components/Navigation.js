import React from 'react'
import logo from "../img/logo.png"

export default function Navigation() {
    return (
        <nav>
            <div className="left"></div>
            <img src={logo} alt="logo" />
            <div className="right">
                <a href="#">I'm an idiot, help me</a>
            </div>
        </nav>
    )
}
