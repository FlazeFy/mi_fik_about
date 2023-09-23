import React from 'react'

// Modules CSS
import landing from './landing.module.css'

// Components
import GetLabel from '@/components/labels/getLabel'
import GetFeatureContainer from '@/components/containers/feature'

export default function GetFeature({builder}) {
    const contentCollapse = <p className='sec-about'>This application has 6 main features that support each other. This feature was created to overcome problems that occur in the Faculty of Creative Industries, Telkom University</p>

    return (
        <>
            <div className={landing.main_title}><GetLabel text="FEATURE ON APPS" type="section" body={contentCollapse}/></div>
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
  