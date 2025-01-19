const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const fs = require('fs/promises');
const { fileURLToPath } = require('url');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())




// receive get request and send tasks
app.get('/tasks',(req,res)=>{
    fs.readFile(path.join(__dirname,'tasks.json'),({
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
    
})

app.post('/add-task',(req,res)=>{
    let newtask = req.body.task
    
    fs.readFile(path.join(__dirname,'tasks.json'),({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks.push(newtask)
        console.log(tasks)
        fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to add task')
        })
    }).catch(()=>{
        res.send('Unable to add task')
    })
})



app.post('/update-tasks',(req,res)=>{
    let tasks = req.body.tasks;
    console.log(tasks)
    fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(tasks))
    .then(()=>{
        res.send('tasks added successfully')
    }).catch((err)=>{
        console.log(err)
        res.send(err,'unable to add tasks')
    })
})

app.post('/delete-task',(req,res)=>{
    let taskIndex=req.body.taskIndex;
    fs.readFile(path.join(__dirname,'tasks.json'),({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks.splice(taskIndex,1)
        fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to delete task')
        })
    }).catch(()=>{
        res.send('Unable to delete task')
    })
})

app.post('/edit-task',(req,res)=>{
    let newText = req.body.text
    let taskIndex = req.body.index
    console.log(req.body.text, req.body.index)
    fs.readFile(path.join(__dirname,'tasks.json'),({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks[taskIndex].text=newText
        fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to edit task')
        })
    }).catch(()=>{
        res.send('Unable to edit task')
    })
})

app.post('/complete-task',(req,res)=>{
    let taskIndex = req.body.index
    console.log( req.body.index)
    fs.readFile(path.join(__dirname,'tasks.json'),({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks[taskIndex].completed=!tasks[taskIndex].completed
        fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to complete/undo task')
        })
    }).catch(()=>{
        res.send('Unable to complete/undo task')
    })
})

app.post('/filter-task',(req,res)=>{
    let taskStatus = req.body.status
    console.log( req.body.status)
    fs.readFile(path.join(__dirname,'tasks.json'),({
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
})

app.get('/clear-completed-task',(req,res)=>{
    let taskStatus = req.body.status
    console.log( req.body.status)
    fs.readFile(path.join(__dirname,'tasks.json'),({
        encoding:'utf-8'
    }))
    .then((fileData)=>{
        tasks=JSON.parse(fileData)
        return tasks
    }).then((tasks)=>{
        tasks = tasks.filter(task => task.completed===false)
        fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(tasks))
        .then(()=>{
            res.send(tasks)
        }).catch(()=>{
            res.send('Unable to clear completed task')
        })
    }).catch(()=>{
        res.send('Unable to clear completed task')
    })
})



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});