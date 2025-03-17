import React from 'react'
import {memo} from 'react'

const Counter = memo((props) => {
    const {resetCnt} = props;
  return (
    <div>
        {console.log("re-rendered")}
        <button onClick={resetCnt}>Reset</button>
    </div>
  )
})

export default Counter