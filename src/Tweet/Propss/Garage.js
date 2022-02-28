import React from 'react'
import Cars from './Cars'

 const Garage = (props) => {
    const cars = props.cars;

  return (
    <div>
        <h1>Garage</h1>
        {cars.length>5 ? <h2>Lets Release</h2> : <h2>Add more Cars Please</h2>}
    </div>
  )
}

export default Garage