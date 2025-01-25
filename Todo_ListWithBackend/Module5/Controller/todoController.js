
const path = require('path')
const fs = require('fs/promises');
const storagePath =path.join(__dirname,'..','tasks.json')

const getTasks=(req,res)=>{
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
       fileData=JSON.parse(fileData)
       return fileData
    }).then((fileData)=>{
        res.send(fileData)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}

const addTask = (req,res)=>{
    let newtask = req.body.task
    
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks.push(newtask)
        console.log(tasks)
        fs.writeFile(storagePath,JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to add task')
        })
    }).catch(()=>{
        res.send('Unable to add task')
    })
}

const updateTask = (req,res)=>{
    let tasks = req.body.tasks;
    console.log(tasks)
    fs.writeFile(storagePath,JSON.stringify(tasks))
    .then(()=>{
        res.send('tasks added successfully')
    }).catch((err)=>{
        console.log(err)
        res.send(err,'unable to add tasks')
    })
}

const deleteTask = (req,res)=>{
    let taskIndex=req.body.taskIndex;
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks.splice(taskIndex,1)
        fs.writeFile(storagePath,JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to delete task')
        })
    }).catch(()=>{
        res.send('Unable to delete task')
    })
}

const editTask = (req,res)=>{
    let newText = req.body.text
    let taskIndex = req.body.index
    console.log(req.body.text, req.body.index)
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks[taskIndex].text=newText
        fs.writeFile(storagePath,JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to edit task')
        })
    }).catch(()=>{
        res.send('Unable to edit task')
    })
}

const completeTask = (req,res)=>{
    let taskIndex = req.body.index
    console.log( req.body.index)
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks[taskIndex].completed=!tasks[taskIndex].completed
        fs.writeFile(storagePath,JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to complete/undo task')
        })
    }).catch(()=>{
        res.send('Unable to complete/undo task')
    })
}

const filterTask =(req,res)=>{
    let taskStatus = req.body.status
    console.log( req.body.status)
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        let newTasks=[]
        if(taskStatus=='active'){
            newTasks = tasks.filter(task => task.completed===false)
        }
        else if(taskStatus=='completed'){
            newTasks = tasks.filter(task => task.completed===true)
        }
        else{
            newTasks=tasks
        }
        res.send(newTasks)
    }).catch(()=>{
        res.send('Unable to filter task')
    })
}

const clearCompletedTask = (req,res)=>{
    let taskStatus = req.body.status
    console.log( req.body.status)
    fs.readFile(storagePath,({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks = tasks.filter(task => task.completed===false)
        fs.writeFile(storagePath,JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to clear completed task')
        })
    }).catch(()=>{
        res.send('Unable to clear completed task')
    })
}



module.exports={
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    editTask,
    completeTask,
    filterTask,
    clearCompletedTask
}