import React, { useContext } from 'react'
import cbConext from '../context/cb.context'

function web() {
  const course = useContext(cbConext)
  return (
    <>
      {/* <cbConext.Consumer>
        {course=>{
          return(
            <div>{course.webCourse}</div>
          )
        }}
      </cbConext.Consumer> */}
      <div>{course.webCourse}</div>
    </>
    // <div>{props.webCourse}</div>
  )
}

export default web