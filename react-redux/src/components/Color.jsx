import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import colorBlue from '../actions/colorActions/colorBlue'
import colorGreen from '../actions/colorActions/colorGreen'
import colorRed from '../actions/colorActions/colorRed'

function Color() {

    const color = useSelector(state=>state.colorReducer)
    const dispatch = useDispatch()
  return (
    <div>
        <p style={{color:`${color.color}`}}>This is current color</p>
        <button onClick={()=>dispatch(colorRed())}>Red</button>
        <button onClick={()=>dispatch(colorGreen())}>Green</button>
        <button onClick={()=>dispatch(colorBlue())}>Blue</button>
    </div>
  )
}

export default Color