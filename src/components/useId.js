import React,{useId} from 'react'
//to create an id for an input and have a label point to the same id
const UseID = () => {
    const id = useId();
    console.log(id)
    return (
      <div>
        <label htmlFor={id + '-firstName'}>First Name</label>
        <div>
          <input id={id + '-firstName'} type="text" />
        </div>
        <label htmlFor={id + '-lastName'}>Last Name</label>
        <div>
          <input id={id + '-lastName'} type="text" />
        </div>
      </div>
    );
}

export default UseID
