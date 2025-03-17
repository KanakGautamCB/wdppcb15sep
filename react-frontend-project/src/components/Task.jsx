import React from 'react'
import { memo } from 'react'

const Task = memo(({title,completed,id, deleteTodo, updateTodo}) => {

  return (
    <>
    <div style={{border:'1px solid green', margin:'10px', padding:'5px'}}>
        <p style={completed?{textDecoration:'line-through'}:null}>{title}</p>
        <div>
            <button onClick={()=>updateTodo(id)}>{completed?'Undo':'Complete'}</button>
            <button onClick={()=>deleteTodo(id)} >Delete</button>
        </div>
    </div>
    </>
  )
})

export default Task