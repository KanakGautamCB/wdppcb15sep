import express from 'express'
import person from '../model/person.js';
import book from '../model/book.js';


const router = express.Router();


router.post('/add',async (req,res)=>{
    let {name,age,books} = req.body;
    if(!name){
        res.status(400).json({
            msg:"Name not Found"
        })
    }

    try {
        let author = await person.findOne({name})
        if(!author){
            author = await person.insertOne({
                name,
                age
            })
        }

        books=books.map((book)=>{
            return{
                ...book,
                author:author.id
            }
        })

        let booksData = await book.insertMany(books)
        let bookIds = booksData.map((b)=>b.id)
        author.book_ids = bookIds
        author = await author.save()
        res.send(author)
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }

})

router.get('/get-author',async (req,res)=>{
    let {name} = req.query
    if(!name){
        res.status(400).json({
            error:"Name not found"
        })
    }

    try {
        let author = await person.findOne({name}).populate('book_ids').exec() ;
        if(!author){
            res.status(500).json({
                error:"author not found"
            })
        }
    
        res.send(author)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }


})

export default router