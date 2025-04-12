import {Route, Routes} from 'react-router'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Restaurant from './components/Restaurant'


function App() {
  

  return (
    <div className='App'>
      <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path=':restaurant_id' element={<Restaurant/>}></Route>
      </Routes>
    </div>
  )
}

export default App
