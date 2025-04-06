import express from 'express'
import { postRestaurant } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/admin-register', postRestaurant)
// router.post('/add-cusine-category')
// router.post('/delete-cusine-category')
// router.post('/add-food-item')
// router.post('/update-food-item/:id')
// router.get('/delete-food-item/:id')
// router.get('/get-food-items')
// router.get('/get-food-item/:food-item-id')
// router.get('/get-all-cusines')

export default router
