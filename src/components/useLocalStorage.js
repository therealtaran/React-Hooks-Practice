import {useState,useDebugValue,useEffect} from "react";

function getSavedValue(key,initialValue){
    const savedValue=JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    if(initialValue instanceof Function) return initialValue() //checking if initialValue is a function
                                                                // and if yes returning the value from it
    return initialValue
}

export default function useLocalStorage(key,initialValue){
    const [value,setValue]=useState(()=>{
        return getSavedValue(key,initialValue)
        //function version is used here as calling jsonparse... everytime is slow
    })
    useDebugValue(value)

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}