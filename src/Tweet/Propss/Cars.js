import React from 'react'
import Garage from './Garage'

const Cars = () => {
    const cars = ['bmw', 'ford','toyota','kkk',"iii"]

  return (
    <div>
        <Garage cars={cars}/>
    </div>
  )
}

export default Cars