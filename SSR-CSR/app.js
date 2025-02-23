const express = require('express')
const app = express()

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}))

const PORT = 4444

const title = 'Movie Page'

const movieList = ["Avenger", "pushpa", "interstellar", "salaar"]

app.get('/',(req,res)=>{
    res.render('index',{
        title:title,
        movieList:movieList
    })
})

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
})