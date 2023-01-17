import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import List from './list'

const UseCallback = () => {
    const [num,setNum]=useState(0)
    const [dark,setDark]=useState(false)

    /*const getItems=()=>{ //getitems function runs every single time usecall.. is rendered
        return [num,num+1,num+2]
    }*/

    const getItems=useCallback(()=>{ //getitems function runs only when num changes and not when dark change
        return [num,num+1,num+2]
    },[num])

    //in above function, useCall.. is used rather than useMemo cos usememo returns the values from the
    //function and not the function itself. to return the function itself so that it can be passed
    //to other components, we need usecallback

    const theme={
        backgroundColor:dark? '#333':'#FFF',
        color:dark?'#FFF':'#333'
    }
  return (
    <div style={theme}>
      <input
      type="number"  value={num} onChange={e=>setNum(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Toggle Theme</button>
      <List getItems={getItems}/>
    </div>
  )
}

export default UseCallback
