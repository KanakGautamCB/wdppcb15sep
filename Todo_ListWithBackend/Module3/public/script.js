document.addEventListener('DOMContentLoaded',()=>{

    const taskForm = document.getElementById('task-form')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')
    const clearCompletedButton = document.getElementById('clear-completed')
    const filterButtons = document.querySelectorAll('.filter-buttons button')

    let tasks =[]

    taskForm.addEventListener('submit', addtask)

    function saveTasks(){
        console.log("saving tasks")
        axios.post('/update-tasks',{
            tasks
        })
            .then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.error(err)
            })
    }

    function addtask(event){
        event.preventDefault()
        const task = taskInput.value.trim()
        tasks.push({
            text:task,
            completed: false
        })
        saveTasks()
        taskInput.value=''
        renderTasks()
    }

    function renderTasks(newTasks=tasks){
        console.log("tasks",tasks)
        taskList.innerHTML='';

        newTasks.forEach((task, index)=>{
            const li = document.createElement('li')
            
            li.innerHTML=`
            <span>${task.text}</span>
            <div>
                <button class="complete-button">${task.completed?"Undo":"Complete"}</button>
                <button class="edit-button">edit</button>
                <button class="delete-button">delete</button>
            </div>
            `
            li.className=`task-item ${task.completed?'completed':''}`

            const deleteButton = li.querySelector(".delete-button")
            const editButton = li.querySelector(".edit-button")
            const completeButton = li.querySelector(".complete-button")

            deleteButton.addEventListener('click',()=>{deleteTask(index)})
            editButton.addEventListener('click',()=>{editTask(li,index)})
            completeButton.addEventListener('click',()=>{completeTask(index)})
            taskList.appendChild(li)
        })
    }
    function deleteTask(index){
        tasks.splice(index,1)
        renderTasks()
        saveTasks()
    }

    function editTask(li,index){

        const span = li.firstElementChild;

        const input = document.createElement('input')
        input.type='text'
        input.value = tasks[index].text
        input.focus()
        li.replaceChild(input,span)

        if(input.value){
            input.addEventListener('blur',()=>{
                tasks[index].text=input.value
                renderTasks()
                saveTasks()
            })
        }
    }

    function completeTask(index){
        tasks[index].completed=!tasks[index].completed
        renderTasks()
        saveTasks()
    }



    document.querySelector('.filter-buttons').addEventListener('click',(event)=>{

        const id = event.target.getAttribute('id')
        const status = id.split('-').pop()
        
        filterButtons.forEach((item)=>{
            const itemId = item.id.split('-').pop();
            if(itemId===status){
                item.classList.add('active')
            }else if (itemId!==status){
                item.classList.remove('active')
            }
        })

        if(status==='active'){
            let newTasks = tasks.filter(task => task.completed===false)
            renderTasks(newTasks)
        }

        if(status==='completed'){
            let newTasks = tasks.filter(task => task.completed===true)
            renderTasks(newTasks)
        }

        if(status==='all'){  
            renderTasks()
        }

    })

    clearCompletedButton.addEventListener('click',()=>{
        console.log('clicked')
        tasks=tasks.filter(task => task.completed===false)
        renderTasks()
        saveTasks()
    })

    // send request to backend for tasks
    function getTasks(){
        axios.get('/tasks')
            .then((res)=>{
                tasks=res.data
            }).then(()=>{
                renderTasks()
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    getTasks()
    
    
})