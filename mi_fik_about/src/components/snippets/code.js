import ReactCodeMirror from '@uiw/react-codemirror'
import React from 'react'
import { useState, useEffect } from "react"

// Modules CSS
import code from './code.module.css'

export default function GetCodeSnippet({builder}) {
    return (
        <div className={code.snipper_holder}>
            <ReactCodeMirror
                value={builder}/>
        </div>
    )
}
  