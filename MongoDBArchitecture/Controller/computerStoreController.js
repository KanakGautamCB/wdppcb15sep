import { getDB } from "../database/dbconfig.js"

const getProducts = async (req,res)=>{
    const db =getDB()
    await db.collection('products').find().toArray()
    .then((data)=>{
        console.log(data)
        res.status(200).json(data)
    }).catch((err)=>{
        res.status
        console.log(err)
    })
}

const addProducts = async (req,res)=>{
    const db =getDB()
    await db.collection('products').insertMany([
        ...req.body.products
    ]).then((msg)=>{
        console.log(msg);
        res.status(200).json('added')
    }).catch((err)=>{
        console.log(err)
    })
}

export {getProducts,addProducts};

