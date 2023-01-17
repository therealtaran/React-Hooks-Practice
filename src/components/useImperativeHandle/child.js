import React from 'react'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'

const Child = (props,ref) => {
    const inputRef=useRef(null)

    useImperativeHandle(ref, ()=>({
        focus:()=>{
            inputRef.current.focus()
        },
    }))
  return (
    <div>
      <input ref={inputRef}/>
    </div>
  )
}

export default React.forwardRef(Child)
