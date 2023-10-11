import React from 'react'

// Modules CSS
import landing from './landing.module.css'

// Components
import GetGalleryContainer from '@/components/containers/gallery'

export default function GetGalleries({builder}) {
    return (
        <>
            <div className={landing.gallery} id="galleries_holder">
                {
                    builder.map((val, i, index) => {
                        return <GetGalleryContainer item={val} id={i} is_detail={null}/>
                    })
                }
            </div>
        </>
    )
}