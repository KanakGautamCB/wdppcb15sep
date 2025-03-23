import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../slices/counterSlice';

function Counter() {
    const cnt = useSelector((state)=>state.counterSlice)
    const dispatch = useDispatch();
  return (
    <div>
        {console.log(cnt)}
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <p>{cnt.value}</p>
    </div>
  )
}

export default Counter