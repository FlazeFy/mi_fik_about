import React from 'react'
import GetBreakLine from '../others/breakLine'

// Modules CSS
import label from './labels.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { getRemoveSpaces } from '@/modules/helpers/converter'

export default function GetLabel({text, type, body}) {
    const id = getRemoveSpaces(text)

    if(type == "section"){
        return (
            <div style={{position:"relative"}}>
                <GetBreakLine length={4}/>
                <hr className={label.divider}></hr>
                <h3 className={label.section_title}>{text}</h3>
                {
                    body ? 
                    <>
                        <button className={label.about_section_btn} type="button" data-bs-toggle="collapse" data-bs-target={"#"+id}
                            ><FontAwesomeIcon icon={faInfoCircle}/> About this section</button>
                        <div className={"collapse "+ label.collapse_box} id={id}>
                            { body }
                        </div>
                    </>
                    :
                    <></>
                }
                <hr className={label.divider} style={{position:"absolute",right:"0"}}></hr>
                <GetBreakLine length={6}/>
            </div>
        )
    } else {
        return <h3>- Label not found -</h3>
    }
}
  