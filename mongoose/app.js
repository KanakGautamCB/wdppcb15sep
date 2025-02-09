import express from 'express';
import path from 'path';
import mongoose from 'mongoose'
import personRouter from './router/personRouter.js'
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.json())
app.use('/',personRouter)

let dbName = 'student'

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
    console.log('Connected!')}
)
  .catch((err)=>{
        console.log(err)
  })

