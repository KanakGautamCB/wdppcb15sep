import React from 'react'
import Task from './Task'
import { useState } from 'react'
import { useCallback } from 'react'

function TaskList({todos,updateTodos}) {

  const [taskInput, setTaskInput] =useState('')

  const addNewTodo = () =>{
    updateTodos([...todos,{
      title:taskInput,
      completed:false,
      id:todos[todos.length-1].id+1
    }])
  }

  const deleteTodo = useCallback((id) =>{
    updateTodos(todos.filter((todo)=>todo.id!==id))
  },[updateTodos, todos])

  const updateTodo = useCallback((id)=>{
    updateTodos(todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    }))
  },[updateTodos, todos])



  return (
    <>
      <div style={{fontSize:'25px'}}>
        <label htmlFor="taskDescription">Task: </label>
        <input type="text" name="taskDescription" id="" placeholder='Enter your Task'
          onChange={(e)=>setTaskInput(e.target.value)}
        />
        <button style={{margin:'5px'}} onClick={()=>addNewTodo()}>Submit</button>
      </div>
      {todos.map((todo,index)=>{
      return(
        <Task key={index} title={todo.title} completed={todo.completed} id={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      )
      })}
    </>
  )
}

export default TaskList