const express = require('express');
const app = express();
const PORT = 4444;
const acadRouter = require('./acads/router')
const accountRouter = require('./accounts/router')
const placementRouter = require('./placement/router')


app.use('/acads',acadRouter);
app.use('/placement',placementRouter);
app.use('/accounts',accountRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});