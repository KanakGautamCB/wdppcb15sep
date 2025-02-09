import express from 'express';
import path from 'path';
import main from './database/dbconfig.js'
import computerStoreRouter from './routers/computerStoreRouter.js'
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.json())

app.use('/',computerStoreRouter)


main()
    .then((msg)=>{
        console.log(msg)
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
        
    })
    .catch((err)=>{
        console.log(err)
    })
