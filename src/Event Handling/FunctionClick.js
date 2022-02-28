import React from 'react'
import ClassClick from './ClassClick'

 const FunctionClick = () => {
     
    const clickHandler = () => {
        console.log("You clicked Me");
    }

  return (

    <>
    <button onClick={clickHandler}>Click Me</button>
    <ClassClick/>
    </>
  )
}

export default FunctionClick;
