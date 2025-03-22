import React from 'react'
import { Routes, Route, useNavigate } from 'react-router'

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/office' element={<Office/>}></Route>
        </Routes>

        
    </div>
  )
}

function NavBar(){
    
    let navigate = useNavigate()

    function goHomepage(){
        navigate('/')
    }

    function goHome(){
        navigate('/home')
    }

    function goOffice(){
        navigate('/office')
    }

    return(
        <>
        <button onClick={goHomepage}>HomePage</button>
        <button onClick={goHome}>Home</button>
        <button onClick={goOffice}>Office</button>
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