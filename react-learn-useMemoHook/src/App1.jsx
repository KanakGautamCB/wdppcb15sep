import { useMemo } from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [cnt,setCnt] = useState(10)
  const [sum, setSum] = useState(0)

  const changeCount = (val) =>{
    console.log(val)
    setCnt(val)
  }

  function calCulateSum(val){
    var s=0;
    for(var i=0;i<=val;i++){
        s+=i;
        console.log(i)
    }
    console.log(s)
    return s;
  }

  return (
    <>
      <div>
        <label>Enter your count</label><input type="number" onChange={(e)=>{
          changeCount(e.target.value)
        }}/>
        <br></br>
        <span>Sum of all Numbers till Count: </span><span>{calCulateSum(cnt)}</span>
      </div>
      <Counter/>
    </>
  )
}

function Counter(){
  const [counter, setCounter]=useState(0)
  return(
    <div>
        <span>Counter is {counter}</span>
        <br/>
        <button onClick={()=>{setCounter(counter+1)}}>Increase Counter</button>
      </div>
  )
}

export default App