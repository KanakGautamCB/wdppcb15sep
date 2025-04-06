import express from 'express'

const router = express.Router()

router.post('/add-review');
router.post('/update-review/:review-id')
router.get('/delete-review/:review-id')
router.get('/get-all-reviews')
router.get('/get-review/:review-id')
router.get('/restaurants')
router.get('/restaurants/:restaurant-id')
router.get('/get-food-items/:restaurant-id')
router.post('/add-to-cart')


export default router;
