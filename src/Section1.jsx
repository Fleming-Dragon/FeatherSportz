import React from "react"
import './Section1.css'
function Section1() {
    return (
        <>
            <div className="main">
                <nav className="navbar">
                    <div className="navp1">
                        <div className="logo"></div>
                        <h1 className="logoname">FEATHER SPORTS</h1>
                        <div className="rec_box"></div>
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <div className="search">Search</div>
                    </div>
                    
                    <div className="navp2">
                        <a href="">sign up</a>
                        <a href="">log in</a>
                        <div className="rec_box2"></div>
                        <div className="available_sports">list of available sports</div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Section1
