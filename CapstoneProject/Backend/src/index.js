import express from 'express'
import mongoose from 'mongoose'
import loginRouter from './routers/login.router.js'
import adminRouter from './routers/admin.router.js'
import userRouter from './routers/user.router.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()


app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));

app.use(cookieParser())

app.use(express.json())


app.use(express.urlencoded({extended:true}))

app.use('/auth',loginRouter)
app.use('/admin',adminRouter)
app.use('/api',userRouter)

const PORT = process.env.port
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.dbName}`)
.then(()=>{
    app.listen(PORT,()=>{
        console.log('listening at', PORT)
    })
})