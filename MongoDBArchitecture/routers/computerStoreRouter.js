import express from 'express'
const router = express.Router()
import { getProducts,addProducts } from '../Controller/computerStoreController.js'

router.get('/products',getProducts)

router.post('/addProducts',addProducts)



export default router;