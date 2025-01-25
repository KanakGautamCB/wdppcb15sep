
const express = require('express');
const app = express();
const PORT = 4444;
const router = require('./Router/router')
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use('/',router)

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});