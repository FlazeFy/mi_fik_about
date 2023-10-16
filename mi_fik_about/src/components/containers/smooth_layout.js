"use client"

import React from 'react'
import { useState, useEffect } from "react"
import Isotope from "isotope-layout"

// Modules CSS
import container from './containers.module.css'
import GetCodeSnippet from '../snippets/code'

export default function GetSmoothLayout({builder}) {
    useEffect(() => {
        isotopeLayout();
    },[])

    const isotopeLayout = () => {
        var grid = document.querySelector('.grid');
        var iso = new Isotope( grid, {
            itemSelector: '.grid-item',
        });
    }

    return (
        <>
            <div className="grid row">
                {
                    builder.map((val, i, index) => {
                        return <>
                        {
                            val['type'] == 'images' ?
                                <>
                                    <div className="grid-item col-4">
                                        <button className={container.btn_grid_img} data-bs-toggle="modal" data-bs-target={"#gall_"+i}>{val['elm']}</button>
                                    </div>
                                    <div className="modal fade" id={"gall_"+i} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                {val['body']}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            : 
                                <></>
                        }
                        </>
                    })
                }
            </div>
            <div className="">
                {
                    builder.map((val, i, index) => {
                        return <>
                        {
                            val['type'] == 'code' ?
                                <>
                                    <div style={{marginTop:"var(--spaceLG)"}}>
                                        <h6>{val['body']}</h6>
                                        <GetCodeSnippet builder={val['elm']}/>
                                    </div>
                                </>
                            :
                                <></>
                        }
                        </>
                    })
                }
            </div>
        </>
    )
}
  