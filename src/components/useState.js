import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [counter,setCounter]=useState(0)
    const [inpt,setInput]=useState("None")
    /*const Increment=()=>{
        setCounter(counter+1)
    }

    const Decrement=()=>{
        if(counter!==0)
        setCounter(counter-1)
    }*/

  return (
    <div>
        <h1>useState Practice</h1>
      {counter}
      <br/>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>
        Increment</button>
      <button onClick={()=>{
        if(counter!==0)
        setCounter(counter-1)
      }}>
        Decrement</button><br/><br/>
      <input placeholder='Enter' onChange={(e)=>setInput(e.target.value)}/>
      <br/>
      {inpt}
    </div>
  )
}

export default UseState
