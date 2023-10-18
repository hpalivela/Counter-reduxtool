import React from 'react'
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';
import { increment,decrement,addBy,minusBy,reset } from './CounterSlice';
const Counter = () => {
        const dispatch=useDispatch();
        const  finalValue= useSelector((state)=>state.counter);
        console.log(finalValue);
//     const[value,setValue]=useState(0);
//     const addHandler=()=>{
//             setValue(value+1)
//     }
//     const minusHandler=()=>{
//             setValue(value-1)
//     }
//     const addByHandler=()=>{
//             setValue(value+10)
//     }
//     const minusByHandler=()=>{
//             setValue(value-10)
//     }
  return (
    <div>
        <center>
      <button onClick={()=>{dispatch(increment())}}>INCREMENT</button>
      <button onClick={()=>{dispatch(decrement())}}>DECREMENT</button>
      <button onClick={()=>{dispatch(addBy(10))}}>INCREMENT BY 10</button>
      <button onClick={()=>{dispatch(minusBy(10))}}>DECREMENT BY 10</button>
      <button onClick={()=>{dispatch(reset())}}>RESET</button>
      <h1>{finalValue.count}</h1>
      </center>
    </div>
  )
}

export default Counter
