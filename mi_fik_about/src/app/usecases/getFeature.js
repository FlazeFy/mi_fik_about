import React from 'react'

// Modules CSS
import landing from './landing.module.css'

// Components
import GetLabel from '@/components/labels/getLabel'
import GetFeatureContainer from '@/components/containers/feature'

export default function GetFeature({builder}) {
    return (
        <>
            <div className={landing.main_title}><GetLabel text="Feature On Apps" type="section"/></div>
            <div className={landing.feature}>
                {
                    builder.map((val, i, index) => {
                        return <GetFeatureContainer item={val}/>
                    })
                }
            </div>
        </>
    )
}
  