import React,{useState, useEffect} from 'react'
import axios from "axios"
//primarily used for api calls as you load the page
const UseEffect = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        console.log("page has loaded")
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    },[])//empty aray for all states, render only when once in beginning
    //can trigger console.log whenever value in dependency array changes
    //remove strictmode in dev practice as it verifies the code twice anc logs the values
    //unlike versions less than 18, it silences the second logs
    //therefore remove to stop running useffect twice
  return (
    <div>
        {data.map((x)=>{
            return(
                <div key={x.id}>
                <div>{x.id}</div>
                <div>{x.body}</div>
                </div>
            )
        })}
    </div>
  )
}

export default UseEffect
