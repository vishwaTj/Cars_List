import React from 'react';
import { useSelector } from 'react-redux';

function CarList() {
   const cars = useSelector((state)=>{
     
      return state.cars.data;
   })

  console.log(cars);

  return (
    <div>

    </div>
  )
}

export default CarList