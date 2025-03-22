import { useState } from "react"

function App() {

  const [visible,setVisible]=useState('app')

  return (
    <>
      {visible=='app'
        &&
        <>
          <button onClick={()=>setVisible('home')}>Home</button>
          <button onClick={()=>setVisible('office')}>Office</button>
        </>
      }
      {
        visible=='home'
        &&
        <Home/>
      }
      {
        visible=='office'
        &&
        <Office/>
      }
    </>
  )
}

function Home(){
  return(
    <>
    <h3>Welcome to Home</h3>
    </>
  )
}

function Office(){
  return(
    <>
    <h3>Welcome to Office</h3>
    </>
  )
}

export default App
