import React from 'react'

// Modules CSS
import container from './containers.module.css'

export default function GetFeatureContainer({item}) {
    return (
        <div className={container.feature_box}>
            <h3 className={container.feature_title}>{item['feature_title']}</h3>
            <img className='w-100 img' style={{width:"240px !important"}} src={item['feature_img']}/>
            <p>{item['feature_desc']}</p>
        </div>
    )
}
  