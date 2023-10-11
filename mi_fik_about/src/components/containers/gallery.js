import React from 'react'
import { useState } from "react"

// Modules CSS
import container from './containers.module.css'

export default function GetGalleryContainer({item}) {
    return (
        <div className={container.gallery_box} style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.55)), url('"+item['url']+"')"}}>
            <div className={container.role_info}>
                <h3 className={container.role_title}>{item['name']}</h3>
            </div>
        </div>
    )
}
  