import React from 'react'

const Events = () => {
    const handleClick=()=>{
        alert("you click button");
    };

 const addition=(a)=>{
    alert(a+10)
 };
  return (
    <div>Events
        <button onDoubleClick={handleClick}></button>
        <button onClick={()=>addition(10)}>butt</button>
    </div>
  )
}

export default Events