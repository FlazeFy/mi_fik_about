import React from 'react'
import { useState } from "react"

// Modules CSS
import container from './containers.module.css'

export default function GetTeamContainer({item, id}) {
    const openTeamDetail = (id) => {
        const teamBox = document.querySelectorAll('.role_box')
        const targetTeam = document.getElementById("teams_"+id)
        
        teamBox.forEach((el) => {
            if(el.id !== "teams_"+id){
                el.style.display = "none"
            }
            targetTeam.style.transform = "rotate(-5deg)";
        });
        document.getElementById('team_holder').append = <>
            <h2 style={{color:"red"}}>test</h2>
        </>
    };

    return (
        <a className={container.role_box+" role_box"} style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.55)), url('"+item['role_person_img']+"')"}}
            id={"teams_"+id} onClick={(e)=>openTeamDetail(id)}>
            <div className={container.role_info}>
                <h3 className={container.role_title}>{item['role_name']}</h3>
                <p className={container.role_body}>{item['role_desc']}</p>
            </div>
        </a>
    )
}
  