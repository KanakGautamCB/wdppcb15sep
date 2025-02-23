import { useState } from "react"

const TaskManager = () =>{

    const [taskState,setTaskState] = useState([
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
        const taskDescription = document.querySelector('.taskDescription').value
        if( taskName && taskDescription){
            const newTask={
                taskName:taskName,
                description: taskDescription,
                id:taskState.length+1
            }
            setTaskState([...taskState, newTask])
        }
    }
    return (
        <div>
            <input type="text" className="taskName" placeholder="task Name"/>
            <input type="text" className="taskDescription" placeholder="task Description"/>
            <button onClick={addTask}>add task</button>
            <div className="Container">
                {
                    taskState.map((task)=>{
                        return(
                            <div key={task.id} className="task">
                                <div className="taskName">
                                    {task.taskName}
                                </div>
                                <div className="description">
                                    {task.description}
                                </div>
                                <button onClick={()=>setTaskState(taskState.filter((t)=>t.id!==task.id))}>delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TaskManager;