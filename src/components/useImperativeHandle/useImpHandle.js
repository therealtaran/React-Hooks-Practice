import React,{useRef} from 'react'
import Child from './child';

//useImperativeHandle allows you to pass a ref to child componenet from parent component
//and control the child comp from parent comp
const UseImpHandle = () => {
    const childRef=useRef(null)

    const focusChild=()=>{
        childRef.current.focus();
    }
  return (
    <div>
        <button onClick={focusChild}>Focus Child</button>
        <Child ref={childRef}/>
    </div>
  )
}

export default UseImpHandle
