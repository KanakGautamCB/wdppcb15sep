const express = require('express')
const app = express()


const port =4444;

//middleware
app.use(express.urlencoded({extended:true}))


app.listen(port,()=>{
    console.log(`listening at ${port}`)
})

// get requests

app.get('/',(req,res)=>{
    console.log(req)
    res.send('<h1>hello</h1>')
})

app.get('/greet',(req,res)=>{
    res.send('<h1>hello how are you?</h1>')
})

// using params ion request

app.get('/greet/:name',(req,res)=>{
    console.log(req)
    res.send(`<h1>hello how are you ${req.params.name}?</h1>`)
})

// using query parameters

app.get('/greetings',(req,res)=>{
    const {name,age,sport} = req.query
    res.send(`Your info is name=${name} age=${age} sport=${sport}`)
})


app.post('/student-detail',(req,res)=>{
    console.log(req.body)
    res.send('request received')
})