"use client"
import React from 'react'
import { connect } from 'react-redux'

 let C = (props) => {
  return (
    <div>
      <h1>C  </h1>
        <h2>NAME: {props.name}</h2>
    <h2>LOCATION:{props.location}</h2>
    
    
    </div>

  )
}
C = connect(
  function(state){
    return{
      name:state.appReducer.name,
      location:state.appReducer.loc
    }
  }
)(C)
export default C
