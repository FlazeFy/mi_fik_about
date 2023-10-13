import React from 'react'
import { useState } from "react"

// Modules CSS
import landing from './landing.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faDownload, faPlay } from "@fortawesome/free-solid-svg-icons"

import GetBreakLine from '@/components/others/breakLine'
import GetGalleries from './getGalleries'

export default function GetToggleEnv({builder}) {
    const [isAsecHovered, setIsAsecHovered] = useState(false)
    const [isBsecHovered, setIsBsecHovered] = useState(false)

    const handleAsecHover = () => {
        setIsAsecHovered(true)
        document.getElementById("sec").style.gridTemplateColumns = "5fr 1fr"
        document.getElementById("asec_detail").style.display = "block"
        document.getElementById("main_img_a").style.display = "none"
    };
  
    const handleAsecMouseLeave = () => {
        setIsAsecHovered(false)
        document.getElementById("sec").style.gridTemplateColumns = "1fr 1fr"
        document.getElementById("asec_detail").style.display = "none"
        document.getElementById("main_img_a").style.display = "block"
    };

    const handleBsecHover = () => {
        setIsBsecHovered(true)
        document.getElementById("sec").style.gridTemplateColumns = "1fr 5fr"
        document.getElementById("bsec_detail").style.display = "block"
        document.getElementById("main_img_b").style.display = "none"
    };
    
    const handleBsecMouseLeave = () => {
        setIsBsecHovered(false)
        document.getElementById("sec").style.gridTemplateColumns = "1fr 1fr"
        document.getElementById("bsec_detail").style.display = "none"
        document.getElementById("main_img_b").style.display = "block"
    };

    return (
        <div className={landing.toggle_box}> 
            <div className={landing.sec} id="sec">
                <div className={landing.asec} id="asec" onMouseEnter={handleAsecHover} onMouseLeave={handleAsecMouseLeave}>
                    <h2 className={landing.sec_title}>{builder['asec_title']}</h2>
                    <div className={landing.env_logo}>{builder['asec_title_icon']}</div>

                    <GetBreakLine length={1}/>
                    <img className={landing.main_img} id="main_img_a" src={builder['asec_main_img']}/>
                    <p className={landing.sec_body}>{builder['asec_body']}</p>
                    <div>
                        <button className={landing.sec_btn}><FontAwesomeIcon icon={faPlay}/> Try it now</button>
                        <button className={landing.sec_btn}><FontAwesomeIcon icon={faCircleInfo}/> See Detail</button>
                        <button className={landing.sec_btn}><FontAwesomeIcon icon={faDownload}/> See Certificate</button>
                    </div>

                    <GetBreakLine length={2}/>
                    <div className={landing.sec_detail} id="asec_detail">
                        <h4 className={landing.sec_subtitle}>Galleries</h4>
                        <GetGalleries builder={builder['asec_galleries']}/>
                    </div>
                </div>
                <div className={landing.bsec} id="bsec" onMouseEnter={handleBsecHover} onMouseLeave={handleBsecMouseLeave}>
                    <h2 className={landing.sec_title}>{builder['bsec_title']}</h2>
                    <div className={landing.env_logo}>{builder['bsec_title_icon']}</div>

                    <GetBreakLine length={1}/>
                    <img className={landing.main_img} id="main_img_b" src={builder['bsec_main_img']}/>
                    <p className={landing.sec_body}>{builder['bsec_body']}</p>
                    <div>
                        <button className={landing.sec_btn}><FontAwesomeIcon icon={faPlay}/> Try it now</button>
                        <button className={landing.sec_btn}><FontAwesomeIcon icon={faCircleInfo}/> See Detail</button>
                        <button className={landing.sec_btn}><FontAwesomeIcon icon={faDownload}/> See Certificate</button>
                    </div>

                    <GetBreakLine length={2}/>
                    <div className={landing.sec_detail} id="bsec_detail">
                        <h4 className={landing.sec_subtitle}>Galleries</h4>
                        <GetGalleries builder={builder['bsec_galleries']}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
  