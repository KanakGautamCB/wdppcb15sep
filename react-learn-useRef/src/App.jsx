import { useEffect, useRef, useState } from "react"


function App() {

  let countRef = useRef(0)
  let nameRef = useRef()
  const [num,setNum] = useState(0)

  const name = 'xyz'

  const handleClick = () =>{
    countRef.current+=1;
    alert(`You clicked ${countRef.current} times`)

  }

  useEffect(()=>{
      setTimeout(()=>{
        // document.querySelector('#name').innerText='abc'
        nameRef.current.innerText='abc;'
      },2000)
  },[])

  return (
    <>
      {console.log('Component rendered')}
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{
        x=x+1;
        setNum(num+1)

      }
      }>
          Increment
      </button>
      {/* <p id="name">Hi my name is {name}</p> */}
      <p ref={nameRef}>Hi my name is {name}</p>
    </>
  )
}

export default App
