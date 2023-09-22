import React from 'react'

// Modules CSS
import landing from './landing.module.css'

// Components
import GetLabel from '@/components/labels/getLabel'
import GetTeamContainer from '@/components/containers/team'

export default function GetRoleNav({builder}) {
    return (
        <>
            <div className={landing.main_title} id="role_main_title"><GetLabel text="Meet Our Teams" type="section"/></div>
            <div className={landing.role}>
                {
                    builder.map((val, i, index) => {
                        return <GetTeamContainer item={val}/>
                    })
                }
            </div>
        </>
    )
}
  