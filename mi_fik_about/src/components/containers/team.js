import React from 'react'
import { useState } from "react"
import GetBreakLine from '../others/breakLine';

// Modules CSS
import container from './containers.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faClose, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"

export default function GetTeamContainer({item, id, is_detail}) {
    const openTeamDetail = (id) => {
        const teamBox = document.querySelectorAll('.role_box')
        const targetTeam = document.getElementById("teams_"+id)
        const targetTargetTeam = document.getElementById("teams_detail_"+id)
        
        teamBox.forEach((el) => {
            if(el.id !== "teams_"+id){
                el.style.display = "none"
            }
        });
        targetTeam.style.transform = "rotate(-5deg)"
        targetTargetTeam.style.display = "block"
    };

    const closeTeamDetail = (id) => {
        // ....
    };

    return (
        <div className={container.role_box+" role_box"} style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.55)), url('"+item['role_person_img']+"')"}}
            id={"teams_"+id} onClick={(e)=> openTeamDetail(id)}>
            <div className={container.role_info}>
                <h3 className={container.role_title}>{item['role_context']}</h3>
                <p className={container.role_body}>{item['role_name']}</p>
            </div>
            {
                !is_detail ?
                    <div className={container.role_detail_box} id={"teams_detail_"+id}>
                        <button className={container.close_detail} title="Close" onClick={(e)=>closeTeamDetail(id)}><FontAwesomeIcon icon={faClose}/></button>
                        <h2 style={{fontWeight:"700", textTransform: "uppercase"}}>{item['role_name']}</h2>
                        <label style={{fontSize:"var(--textXLG)"}}>{item['role_context']}</label>
                        <GetBreakLine length={3}/>
                        <p>{item['role_bio']}</p>
                        <GetBreakLine length={2}/>
                        <h4 style={{fontWeight:"700", textTransform: "uppercase"}}>Contact</h4>
                        <div>
                            {
                                item['email'] != null ?
                                    <a className={container.contact_btn} href={`mailto:${item['email']}`}><FontAwesomeIcon icon={faEnvelope}/></a>
                                :
                                    <></>
                            }
                            {
                                item['linkedin'] != null ?
                                    <a className={container.contact_btn} href={item['linkedin']}><FontAwesomeIcon icon={faLinkedin}/></a>
                                :
                                    <></>
                            }
                            {
                                item['website'] != null ?
                                    <a className={container.contact_btn} href={item['website']}><FontAwesomeIcon icon={faLink}/></a>
                                :
                                    <></>
                            }
                        </div>
                    </div>
                :
                    <></>
            }
        </div>
    )
}
  