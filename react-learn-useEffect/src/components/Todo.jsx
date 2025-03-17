import React from 'react'

function Todo(props) {
    const {index,title,completed,displaySingleTodo}=props
  return (
    <div>
        <p>{title}</p>
        {completed?<p>Already Done</p>:<p>Not Completed yet</p>}
        <button onClick={()=>displaySingleTodo(index)}>Display This Todo</button>
        <hr/>
    </div>
  )
}

export default Todo