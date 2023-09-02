import React from 'react'
import { useState } from "react"

// Modules CSS
import landing from './landing.module.css'

// Components
import GetLabel from '@/components/labels/getLabel'

export default function GetRoleNav({builder}) {
    const [isRoleHovered, setIsRoleHovered] = useState(false)

    const handleRoleHover = () => {
        setIsRoleHovered(true)
        document.getElementById("sec").style.height = "70%"
        document.getElementById("role_main_title").style.top = "-360px !important"
    };
  
    const handleRoleMouseLeave = () => {
        setIsRoleHovered(false)
        document.getElementById("sec").style.height = "100%"
        document.getElementById("role_main_title").style.top = "0 !important"
    };

    return (
        <>
            <div className={landing.role_main_title} id="role_main_title"><GetLabel text="Our Roles" type="section"/></div>
            <div className={landing.role} onMouseEnter={handleRoleHover} onMouseLeave={handleRoleMouseLeave}>
                {
                    builder.map(e => {
                        return (
                            <div className={landing.role_box}>
                                <img src={e.role_person_img} className={landing.role_profile_img}></img>
                                <h3 className={landing.role_title}>{e.role_name}</h3>
                                <p className={landing.sec_body}>{e.role_desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
  