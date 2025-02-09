const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 4444;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const path = require('path')

const dbName = 'ComputerStore';
let db;
let collection;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())


app.get('/products',(req,res)=>{
    collection.find().toArray()
    .then((data)=>{
        console.log(data)
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.post('/addProducts',(req,res)=>{
    collection.insertMany([
        ...req.body.products
    ]).then((msg)=>{
        console.log(msg);
        res.send('added')
    }).catch((err)=>{
        console.log(err)
    })
})

async function main() {
    
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    collection = db.collection('products');
    return 'done.';
}



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

