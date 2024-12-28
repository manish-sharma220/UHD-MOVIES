import React from 'react'

const Product = ({title,brand,price,name}) => {
   
  return (
    <div>
        <h2>{title}</h2>
        <h2>{brand}</h2>
        <h2>{price}</h2>
        <h2>{name}</h2>
    </div>
  )
}

export default Product