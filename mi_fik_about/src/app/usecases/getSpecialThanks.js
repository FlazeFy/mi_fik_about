import React from 'react'

// Modules CSS
import landing from './landing.module.css'

// Components
import GetLabel from '@/components/labels/getLabel'
import GetTeamContainer from '@/components/containers/team'

export default function GetSpecialThank({builder}) {
    const contentCollapse = <p className='sec-about'>Special Thanks to all people who helped us developed this Apps. From our Lecturer, Client, Examiner, Senior, and Tester</p>

    return (
        <>
            <div className={landing.main_title} id="role_main_title"><GetLabel text="SPECIAL THANKS" type="section" body={contentCollapse}/></div>
            <div className={landing.role} id="team_holder">
                {
                    builder.map((val, i, index) => {
                        return <GetTeamContainer item={val} id={i} is_detail={false} ctx={"thanks"}/>
                    })
                }
            </div>
        </>
    )
}
  