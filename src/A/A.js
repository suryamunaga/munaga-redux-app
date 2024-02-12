"use client"
import React, { useRef } from 'react'
import { appStore } from '@/store/appStore'

export const A = () => {
const nameRef =   useRef()
    const handleClick=()=>{
        const name =nameRef.current.value
        appStore.dispatch({
          type:"NAME_UPDATE",
          payload:name
        })
    }
  return (
    <div>
      <h1>A</h1>
        <h2>NAME:<input ref={nameRef}/></h2>
        <button onClick={handleClick}>SHARE NAME</button>
        </div>
  )
}
