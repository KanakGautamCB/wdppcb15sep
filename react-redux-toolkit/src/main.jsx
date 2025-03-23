import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice.jsx'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({counterSlice})

const store = configureStore({
  reducer:rootReducer
})


createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  
  
)
