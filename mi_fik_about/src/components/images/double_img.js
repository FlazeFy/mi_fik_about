import React from 'react'

// Modules CSS
import image from './images.module.css'

// Components

export default function GetDoubleImage({first, second}) {

    return (
        <div className={image.holder_double_img}>
            <div className={image.box_img}>
                <img src={second}/>
            </div>
            <div className={image.box_img}>
                <img src={first}/>
            </div>
        </div>
    )
}
  