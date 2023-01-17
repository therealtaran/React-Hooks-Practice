import React from 'react'
import { useState } from 'react'
import List from './defval_list'
//similar to debounce/throttle
//function is very slow when list size is huge
const UseDeferredValue = () => {
    const [input,setInput]=useState("")
    

  return (
    <div>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
      <List input={input}/>
    </div>
  )
}

export default UseDeferredValue
