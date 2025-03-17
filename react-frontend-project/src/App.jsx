import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import { useCallback } from 'react';
import { useMemo } from 'react';
import Analytics from './components/Analytics';


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    .then((res)=>{
      setTodos(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })      
  },[])

  const updateTodos = useCallback((newTodos)=>{
    setTodos(newTodos)
  },[])

  let {completedTasks,incompletedTasks} = useMemo(()=>{
    var completedTasks =0;
    var incompletedTasks = 0;
    todos.forEach((todo)=>{
      if(todo.completed){
        completedTasks++;
      }else{
        incompletedTasks++;
      }
    })
    return{
      completedTasks,
      incompletedTasks
    }
  },[todos])
  

  return (
    <>
      <h1>Task Tracker</h1>
      <TaskList todos={todos} updateTodos={updateTodos}/>
      <Analytics completedTasks={completedTasks} incompletedTasks={incompletedTasks}/>
    </>
  )
}

export default App
