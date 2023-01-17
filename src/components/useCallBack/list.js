import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const List = ({getItems}) => {  //getitems is a new function everytime usecall.. is rendered
                                //and this is rectified using useCallback hook
    const [items,setItems]=useState([])

    useEffect(()=>{
        setItems(getItems())
        console.log('Updating items')
    },[getItems])
  return (
    <div>
      {items.map(item=>
        <div key={item}>{item}</div>
      )}
    </div>
  )
}

export default List
