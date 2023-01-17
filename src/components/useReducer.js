import React from 'react'
import { useReducer } from 'react'
//replace or alternate for useState hook

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1, showText:state.showText}
        case "toggleShowText":
            return {count:state.count, showText:!state.showText}
        default:
            return state
    }
}

const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer, {count:0,showText:false})//setting reducer function and initial values for the
                                                  //states
  return (
    <div>
      <h1>{state.count}</h1>
      <button 
      onClick={()=>{
        dispatch({type:"INCREMENT"})
        dispatch({type:"toggleShowText"})
      }}>Click here</button>
      {state.showText && <p>This is a text</p>}
    </div>
  )
}

export default UseReducer
