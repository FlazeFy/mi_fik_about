import React from 'react'
import landing from './landing.module.css'

export default function GetToggleEnv({builder}) {
    return (
        <div className={landing.toggle_box}> 
            <h1 className={landing.main_title}>{builder.title}</h1>
            <div className={landing.sec}>
                <div className={landing.asec}>
                    <h2 className={landing.sec_title}>{builder.asec_title}</h2>
                </div>
                <div className={landing.bsec}>
                    <h2 className={landing.sec_title}>{builder.bsec_title}</h2>
                </div>
            </div>
        </div>
    )
}
  