import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer.jsx'

const store = createStore(rootReducer)
store.subscribe(()=>console.log("state after action is dispatched", store.getState()))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>,
)
