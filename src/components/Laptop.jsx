import React from 'react'
import  './Laptop.css'

const Laptop = ({brand,model,price}) => {
    const obj={
        backgroundColor:'blue',
        padding:'15px',
        margin:'15px',
        borderRadius:'10px',
        border:"2px solid grey"
    }
  return (
    <div className="div"><h2>{brand}</h2>
    <h2>{model}</h2>
    <h2>{price}</h2></div>
  )
}

export default Laptop