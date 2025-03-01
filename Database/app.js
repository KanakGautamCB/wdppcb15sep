import express from "express";
import mongoose from 'mongoose'
import authorRouter from './routes/authorRouter.js'
import bookRouter from "./routes/bookRouter.js";


const PORT = 4444
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/author', authorRouter)
app.use('/book', bookRouter)


mongoose
    .connect('mongodb://localhost:27017')
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`listening at ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })




