import React,{useState, useTransition} from 'react'

//used for slow and sluggish apps
//alterantive->useDeferredValue
//all state changes in react are high priority
//all run after one another and after all finish they render out to screen
//by using this hook, u r doing more renders than normal
//only use when there is code in ur app that can slow down performance
const UseTransitionEffect = () => {
    const [isPending,startTransition]=useTransition()
        //startTransition will set all state inside transition to low priority
        //and will render to screen after some time only
    const [input,setInput]=useState("")
    const [list,setList]=useState([])
    const size=15000

    const handleChange=(e)=>{
        setInput(e.target.value)//this state is high priority
        startTransition(()=>{
            const l=[]
            for(let i=0;i<size;i++){
                l.push(e.target.value)
            }
            setList(l) //after low prior stuff is done, it will render to screen
                        //low prior stuff will happen in backgr while high prior stuff happens
        })
    }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange}/>
      {isPending? "Loading..."
      :list.map((item,index)=>{
        return (<div key={index}>{item}</div>)
      })}
    </div>
  )
}

export default UseTransitionEffect
