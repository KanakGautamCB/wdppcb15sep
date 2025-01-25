document.addEventListener('DOMContentLoaded',()=>{

    const taskForm = document.getElementById('task-form')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')
    const clearCompletedButton = document.getElementById('clear-completed')
    const filterButtons = document.querySelectorAll('.filter-buttons button')

    

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
        const text = taskInput.value.trim()
        axios.post('/add-task',{
            task:{
                text,
                completed:false
            }
        })
        .then((res)=>{
            console.log(res)
            renderTasks(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        taskInput.value=''
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
            editButton.addEventListener('click',()=>{editTask(li,index,task.text)})
            completeButton.addEventListener('click',()=>{completeTask(index)})
            taskList.appendChild(li)
        })
    }
    function deleteTask(index){
        axios.post('/delete-task',{
            taskIndex:index
        })
            .then((res)=>{
                renderTasks(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    }

    function editTask(li,index,text){

        const span = li.firstElementChild;

        const input = document.createElement('input')
        input.type='text'
        input.value = text
        input.focus()
        li.replaceChild(input,span)

        if(input.value){
            input.addEventListener('blur',()=>{
                axios.post('/edit-task',{
                    text:input.value.trim(),
                    index:index
                })
                .then((res)=>{
                    renderTasks(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
            })
        }
    }

    function completeTask(index){
        axios.post('/complete-task',{
            index:index
        })
        .then((res)=>{
            renderTasks(res.data)
        }).catch((err)=>{
            console.log(err)
        })
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

        axios.post('/filter-task',{
            status:status
        })
        .then((res)=>{
            renderTasks(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    })

    clearCompletedButton.addEventListener('click',()=>{
        console.log('clicked')
        axios.get('/clear-completed-task')
        .then((res)=>{
            renderTasks(res.data)
        }).catch((err)=>{
            console.log(err)
        })
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