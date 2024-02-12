"use client"
import { appStore } from '@/store/appStore'
import React, { useState } from 'react'

export const    B = () => {
    const [loc,setLoc] =   useState("")
    const handleClick=()=>{

      appStore.dispatch({
        type: "LOC_UPDATE",

        payload:loc 
      })

    }
    
  return (
    <div>
      <h1>B</h1>
        <h1>LOCATION:<input onChange={(eve)=>setLoc(eve?.target?.value) }/></h1>
        <button onClick={handleClick}>SHARE LOCATION</button>
        </div>
  )
}
