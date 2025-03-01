import express from 'express'
import person from '../model/person.js';
import book from '../model/book.js';


const router = express.Router();

router.post('/add',async (req,res)=>{
    let {name,year,author}= req.body;
    if(!name || !author){
        res.status(400).json({
            error:"Name or Author not found"
        })
    }

    try {
        
        let authorData = await person.findOne({name:author})
        if(!authorData){
            author = await person.insertOne({
                name: author
            })
        }

        let bookData = await book.insertOne({
            name:name,
            year:year,
            author:author.id
        })

        if(author.book_ids){
            author.book_ids=[...author.book_ids,bookData.id]
        }else{
            author.book_ids=[bookData.id]
        }
        author = await author.save()
        res.send(bookData)

    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
})

router.get('/get-book',async (req,res)=>{
    let {name} = req.query
    if(!name){
        res.status(400).json({
            error:"Name not found"
        })
    }

    try {
        let bookData = await book.findOne({name}).populate('author').exec()
        res.send(bookData)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

export default router