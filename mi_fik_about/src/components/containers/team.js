import React from 'react'
import { useState } from "react"

// Modules CSS
import container from './containers.module.css'

export default function GetTeamContainer({item}) {
    return (
        <a className={container.role_box} style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.55)), url('"+item['role_person_img']+"')"}}
            href={item['role_url']}>
            <div className={container.role_info}>
                <h3 className={container.role_title}>{item['role_name']}</h3>
                <p className={container.role_body}>{item['role_desc']}</p>
            </div>
        </a>
    )
}
  