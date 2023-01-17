import React,{useState,useRef,useEffect} from 'react'
//ref is similar to state, persists between renders in your component
//ref vs state-->ref doesnt cause comp to reupdate when it changes
//refs stay constant thru changes and does not update
//useful for accessing dom elements
//useful for persisting values across renders without causing re render
//used to change layout of page before it prints to user
const UseRef = () => {
    const [name,setName]=useState("")
    const inputRef=useRef(0)
    const prevName=useRef("")

    useEffect(()=>{
        inputRef.current=inputRef.current+1
    })

    useEffect(()=>{
        prevName.current=name
    },[name]) //function runs only when state of name changes
  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <div>My name is "{name}" and it used to be "{prevName.current}"</div>
      <div>Render count:{inputRef.current}</div>
    </div>
  )
}

export default UseRef
