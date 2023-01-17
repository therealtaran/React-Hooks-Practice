import React from 'react'
import useLocalStorage from './useLocalStorage'

//useDebugValue can be used for custom made hooks only
//used to provide labels in reactdev tools for that custom hook
//useLocalStorage is the custom hook here
const UseDebugValue = () => {
    const [name,setName]=useLocalStorage('name','')
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </div>
  )
}

export default UseDebugValue
