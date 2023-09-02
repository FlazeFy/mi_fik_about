import React from 'react'
import { useState } from "react"

// Modules CSS
import landing from './landing.module.css'

export default function GetToggleEnv({builder}) {
    const [isAsecHovered, setIsAsecHovered] = useState(false)
    const [isBsecHovered, setIsBsecHovered] = useState(false)

    const handleAsecHover = () => {
        setIsAsecHovered(true)
        document.getElementById("sec").style.gridTemplateColumns = "5fr 1fr"
    };
  
    const handleAsecMouseLeave = () => {
        setIsAsecHovered(false)
        document.getElementById("sec").style.gridTemplateColumns = "1fr 1fr"
    };

    const handleBsecHover = () => {
        setIsBsecHovered(true)
        document.getElementById("sec").style.gridTemplateColumns = "1fr 5fr"
    };
    
    const handleBsecMouseLeave = () => {
        setIsBsecHovered(false)
        document.getElementById("sec").style.gridTemplateColumns = "1fr 1fr"
    };

    return (
        <div className={landing.toggle_box}> 
            <h1 className={landing.main_title}>{builder.title}</h1>
            <div className={landing.sec} id="sec">
                <div className={landing.asec} id="asec" onMouseEnter={handleAsecHover} onMouseLeave={handleAsecMouseLeave}>
                    <h2 className={landing.sec_title}>{builder.asec_title}</h2>
                    <div className={landing.env_logo}>{builder.asec_title_icon}</div>
                    <p className={landing.sec_body}>{builder.asec_body}</p>
                    <div>
                        <button className={landing.sec_btn}>Try it now</button>
                        <button className={landing.sec_btn}>See Detail</button>
                    </div>
                </div>
                <div className={landing.bsec} id="bsec" onMouseEnter={handleBsecHover} onMouseLeave={handleBsecMouseLeave}>
                    <h2 className={landing.sec_title}>{builder.bsec_title}</h2>
                    <div className={landing.env_logo}>{builder.bsec_title_icon}</div>
                    <p className={landing.sec_body}>{builder.bsec_body}</p>
                    <div>
                        <button className={landing.sec_btn}>Try it now</button>
                        <button className={landing.sec_btn}>See Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
  