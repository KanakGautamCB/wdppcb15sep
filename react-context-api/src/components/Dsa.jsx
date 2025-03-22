import React from 'react'
import cbConext from '../context/cb.context'

function dsa() {
  return (
    <>
      <cbConext.Consumer>
        {course =>{
          return(
            <div>{course.dsaCourse}</div>
          )
        }}
      </cbConext.Consumer>
    </>
    // <div>{props.dsaCourse}</div>
  )
}

export default dsa