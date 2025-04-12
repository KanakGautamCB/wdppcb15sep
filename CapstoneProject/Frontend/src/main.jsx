import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Navbar from './components/Navbar.jsx'
import store from './redux/store/store.js'
import {Provider} from 'react-redux'

store.subscribe(()=>store.getState())

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Provider store={store}>
        <Navbar/>
        <App/>
    </Provider>
 </BrowserRouter>
  
)
