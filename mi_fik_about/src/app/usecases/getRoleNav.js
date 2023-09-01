import React from 'react'
import landing from './landing.module.css'

export default function GetRoleNav({builder}) {
    return (
        <div className={landing.role}>
            {
                builder.map(e => {
                    return (
                        <div className={landing.role_box}>
                            <h3 className={landing.role_title}>{e.role_name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
  