const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended:true}))

const PORT = 4444

const movieList = ["Avenger", "pushpa", "interstellar", "salaar"]

//csr

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.get('/movie-list',(req,res)=>{
    res.send(movieList)
})

//ssr

app.get('/site',(req,res)=>{

    let movieListHTML = '';
    movieList.forEach(movie=>{
        movieListHTML+=`<li>${movie}</li>`
    })
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Movie List</h1>
            <ul class="movieList">
                ${movieListHTML}
            </ul>
        </body>
        </html>`
    )
})



app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`)
})