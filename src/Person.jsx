import React from 'react'
import Superman from './Superman'

const Person = () => {

    const person={
        name:"manish",
        age:19,
        gmail:'sharmamanishkumar558@gmail.com',
        pincode: 768201
    
      }
      return (
        <>
        
        <div><h1>{person.gmail} <Superman/></h1>
        <h1>age={person.age}</h1></div>
        </>
        
      )
  
}

export default Person