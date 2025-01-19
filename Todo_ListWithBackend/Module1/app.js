const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/styles.css', (req,res)=>{
    res.sendFile(path.join(__dirname,'styles.css'))
})

app.get('/script.js', (req,res)=>{
    res.sendFile(path.join(__dirname,'script.js'))
})



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});