import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

//updating state in react will rerender entire component in react
//usememo will make sure a function in the component doesnt rerun if the input is same after re rendering
const UseMemo = () => {
    const [num,setNum]=useState(0)
    const [dark,setDark]=useState(false)
    const slowFunction=(num)=>{
        console.log('calling slow function')
        for(let i=0;i<10000000;i++){}
        return num*2
    }
    const doubleNum=useMemo(()=>{ //usememo runs slow.. only when different input is given
                                  //and not when theme is changed which causes the comp to rerender
        return slowFunction(num)
    },[num])
    const themeStyles={
        backgroundColor:dark?'black':'white',
        color:dark? 'white':'black'
    }

  return (
    <div>
      <input type="number" value={num} onChange={e=>setNum(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(dark=>!dark)}>Change theme</button>
      <div style={themeStyles}>{doubleNum}</div>
    </div>
  )
}

export default UseMemo
