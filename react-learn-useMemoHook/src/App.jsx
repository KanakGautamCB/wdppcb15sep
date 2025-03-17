import { useMemo } from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [cnt,setCnt] = useState(10)
  const [counter, setCounter]=useState(0)

  const changeCount = (val) =>{
    console.log(val)
    setCnt(val)
  }

  const sum = useMemo(function calCulateSum(){
    var s=0;
    for(var i=0;i<=cnt;i++){
        s+=i;
        console.log(i)
    }
    console.log(s)
    return s;
  },[cnt])

  return (
    <>
      <div>
        <label>Enter your count</label><input type="number" onChange={(e)=>{
          changeCount(e.target.value)
        }}/>
        <br></br>
        <span>Sum of all Numbers till Count: </span><span>{sum}</span>
      </div>
      <div>
        <span>Counter is {counter}</span>
        <br/>
        <button onClick={()=>{setCounter(counter+1)}}>Increase Counter</button>
      </div>
    </>
  )
}


export default App
