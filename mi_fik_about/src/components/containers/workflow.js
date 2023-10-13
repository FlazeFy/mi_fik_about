import React from 'react'

// Modules CSS
import container from './containers.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"
import GetBreakLine from '../others/breakLine'

export default function GetWorkflowContainer({builder}) {
    return (
        <div className={container.flowbox}>
            {
                builder.map((val, i, index) => {
                    return (
                        <div className={container.flowbox_item}>
                            <div class={container.flowbox_body}>
                                <header>{i+1}. {val['step_name']}</header>
                                {val['step_body']}
                                <button className={container.flowbox_more} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+i}><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter}/> See Detail</button>
                                <div className="collapse show pt-3" id={"collapse_"+i}>
                                    {
                                        val['resource'] == null ?
                                            <></>
                                        : 
                                            <>
                                                <h6>Resource : </h6>
                                                {val['resource']}
                                            </>
                                    }
                                    {
                                        val['galleries'] == null ?
                                            <></>
                                        : 
                                            <>
                                                <h6> Galleries : </h6>
                                                {val['galleries']}
                                            </>
                                    }
                                    {
                                        val['related_with'] == null ?
                                            <></>
                                        : 
                                            <>
                                                <h6>Related with : </h6>
                                                {val['related_with']}
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
  