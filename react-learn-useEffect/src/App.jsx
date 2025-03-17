import { useEffect, useState } from "react"
import axios from 'axios'
import Todo from "./components/Todo"

function App() {
  
  const [todos, setTodos] = useState([])
  const [index, setIndex] = useState(0)
  const [date, setDate]= useState(new Date().toString())

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      setTodos(res.data.splice(0,10));
      console.log(res.data.splice(0,10));
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    if(index){
      console.log(index)
      axios.get(`https://jsonplaceholder.typicode.com/todos?id=${index}`)
      .then((res)=>{
        setTodos(res.data)
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },[index])

  useEffect(()=>{
    setDate(new Date().toString())
  })

  const displaySingleTodo = (num)=>{
      setIndex(num)
  }


  return (
    <>
      <h1>Todos</h1>
      <h3>{date}</h3>
      <div>
        {todos.map((todo, index)=>{
          console.log(todo)
          return(
            <Todo key={index} 
            title={todo.title} 
            completed={todo.completed}
            displaySingleTodo={displaySingleTodo}
            index={todo.id}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
