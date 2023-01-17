import React,{useMemo,useDeferredValue} from 'react'
import { useEffect } from 'react'

const List = ({input}) => {
    const size=10000
    const def_input=useDeferredValue(input)
    const list=useMemo(()=>{
        const l=[]
        for(let i=0;i<size;i++){
            l.push(<div key={i}>{def_input}</div>)
        }
        return l
    },[def_input])

    useEffect(()=>{
        console.log(`Value:${input}\nDeferred value:${def_input}`) //notice in console that defer... will stay the same
                                                                    //until some time passes after giving input stops(few milli sec)
    })
  return (
    list
  )
}

export default List
