import { useState } from "react"

const Loop =() =>{

    const [tasks, setTasks] = useState([
        {
            taskName: "Learn ReactJs",
            description: "Fun with ReactJS",
            id: 1,
        },
        {
            taskName: "Learn CPP",
            description: "Fun with CPP",
            id: 2,
        }
    ])

    const addTask = () =>{
        const taskName = document.querySelector('.taskName').value
        const description = document.querySelector('.taskDescription').value
        
        const newTaskId = tasks.length?tasks[tasks.length-1].id+1:1
        const newTask = {
            taskName,
            description,
            id:newTaskId
        }

        setTasks([...tasks,newTask])
    }

    const deleteTask=(id)=>{
        const tasks1 = tasks.filter((task)=>{
            return task.id!==id;
        })
        setTasks(tasks1)
    }

    return (
        <div id="container">
            <input className="taskName" type="text" placeholder="enter task Name"/>
            <input className="taskDescription" type="text" placeholder="enter task Description"/>
            <button onClick={addTask}>Add task</button>
            <ol type='1'>
               {tasks.map((task)=>{
                return(
                    <li key={task.id}>
                    <div>{task.taskName}</div>
                    <div>{task.description}</div>
                    <button onClick={()=>{deleteTask(task.id)}}>delete Task</button>
                    </li>
                )
               })} 
            </ol>
            
        </div>
    )

}

export default Loop;