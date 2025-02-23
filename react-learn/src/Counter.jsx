import { useState } from "react";
import { useCounter } from "./useCounter";




const Counter = () =>{

  const {cnt,increaseCounter,decreaseCounter} = useCounter(0)


  return(
      <div>
        <p>{cnt}</p>
        <div>
          <button onClick={increaseCounter}>Increse</button>
          <button onClick={decreaseCounter}>Decrease</button>
        </div>
      </div>
  )

}

export default Counter;