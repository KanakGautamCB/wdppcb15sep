const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

let tasks =[{
    text:'khana',
    completed:false
},{
    text:'peena',
    completed:false
},
{
    text:'sona',
    completed:false
}]

// receive get request and send tasks
app.get('/tasks',(req,res)=>{
    res.send(tasks)
})

app.post('/update-tasks',(req,res)=>{
    tasks =req.body.tasks
})



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});