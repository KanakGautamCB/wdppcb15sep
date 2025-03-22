
import { useState } from 'react'
import './App.css'
import Codingblocks from './components/Codingblocks'
import cbConext from './context/cb.context'

function App() {

  const [webCourse, setWebCourse]= useState('this is web course')
  const [dsaCourse, setDsaCourse]= useState('dsa course')

  return (
    <>
      {/* <Codingblocks dsaCourse={dsaCourse} webCourse={webCourse}/> */}
      <cbConext.Provider value={{dsaCourse,webCourse}}>
        <Codingblocks/>
      </cbConext.Provider>
      
    </>
  )
}

export default App
