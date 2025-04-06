import express from 'express'
import mongoose from 'mongoose'
import loginRouter from './routers/login.router.js'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/auth',loginRouter)

const PORT = process.env.port
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.dbName}`)
.then(()=>{
    app.listen(PORT,()=>{
        console.log('listening at', PORT)
    })
})