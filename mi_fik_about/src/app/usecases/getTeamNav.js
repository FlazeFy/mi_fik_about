import React from 'react'

// Modules CSS
import landing from './landing.module.css'

// Components
import GetLabel from '@/components/labels/getLabel'
import GetTeamContainer from '@/components/containers/team'

export default function GetTeamNav({builder}) {
    const contentCollapse = <p className='sec-about'>This project is created by 5 people consisting of System Analysts, Frontend Developers, Backend Developers, and Quality Assurance. We are all software engineering students in Telkom University</p>
    
    return (
        <>
            <div className={landing.main_title} id="role_main_title"><GetLabel text="MEET OUR TEAMS" type="section" body={contentCollapse}/></div>
            <div className={landing.role} id="team_holder">
                {
                    builder.map((val, i, index) => {
                        return <GetTeamContainer item={val} id={i} is_detail={true} ctx={"teams"}/>
                    })
                }
            </div>
        </>
    )
}
  