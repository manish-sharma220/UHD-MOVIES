import React,{ useState} from 'react'

const Counter = () => {
    let counter=0;
    const [first, setfirst] = useState(second)
    const [count ,setCount]= useState(10)
    const increase=()=>{
         
         
         console.log("counter: ",counter);
    }
    const decrease=()=>{
        counter--;
        console.log("counter: ",counter);
   }
  return (
    <div>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}></button>
        <button onClick={()=>setCount(count+20)}>{count}</button>
    </div>
  )
}

export default Counter