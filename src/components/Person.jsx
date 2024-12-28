import React from 'react'

const Person = ({name , age , pancard}) => {
    
  return (
    <>
    <div>
       {age > 18 ? <h2> {name} can drive </h2>: <h2>{name} cant drive</h2>}
       {pancard && <h2> {name} can open account</h2>}
    </div>
    </>
    
  )
}

export default Person