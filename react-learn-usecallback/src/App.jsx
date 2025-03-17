import { useState, useCallback } from 'react'
import Counter from './Counter';

function App() {

  const [cnt,setCnt]=useState(0);
  const [cnt2, setCnt2]= useState(2);

  const resetCnt = useCallback(()=>{
    setCnt(cnt2)
  },[cnt2])

  return (
    <>
     <div>
        <span>Counter is {cnt}</span>
        <br></br>
        <button onClick={()=>{setCnt(cnt+1)}}>Increment Count</button>
        <Counter resetCnt={resetCnt}/>
      </div> 
    </>
  )
}

export default App
