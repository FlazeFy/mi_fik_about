import React from 'react'

export default function GetLabel({text, type}) {
    if(type == "section"){
        return <h3 style={{fontWeight:600, fontSize:'var(--textXJumbo)'}}>{text}</h3>
    } else {
        return <h3>- Label not found -</h3>
    }
}
  