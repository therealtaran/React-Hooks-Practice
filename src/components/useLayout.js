import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

//almost similar to useeffect
//fund diff is useeffect is called after everything is rendered to page
//and uselayouteffect works synchronously
//inorder to move major components in the DOM visible to user, to avoid flickering,use useLayout effect
//useEffect run after React calculates DOM changes but before it is painted
const UseLayout = () => {
    const [show,setShow]=useState(false)
    const popup=useRef(null)
    const button=useRef(null)

    /*useEffect(()=>{
        if(popup===null || button===null) return
        const {bottom}=button.current.getBoundingClientRect()
        popup.current.style.top=`${bottom+25}px`
    },[show])*/
    
    useLayoutEffect(()=>{
        if(popup.current===null || button.current===null) return
        const {bottom}=button.current.getBoundingClientRect() //takes a portion from DOM
        popup.current.style.top=`${bottom+25}px` //this code will be run and the position will be set first
                                                //for the case of useLayoutEffct
    },[show])

  return (
    <div>
        <button ref={button} onClick={()=>setShow(prev=>!prev)}>Click here</button>
        {show && (
            <div style={{position:"absolute"}} ref={popup}>
                Implementing useLayoutEffect
            </div>
        )}
    </div>
  )
}

export default UseLayout
