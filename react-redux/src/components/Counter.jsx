import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterIncrement from '../actions/counterActions/counterIncrement';
import counterDecrement from '../actions/counterActions/counterDecrement.action';

function Counter() {
    const cnt = useSelector((state)=>state.counterReducer)
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(counterIncrement())}>Increment</button>
        <button onClick={()=>dispatch(counterDecrement())}>Decrement</button>
        <p>{cnt.value}</p>
    </div>
  )
}

export default Counter