import express from 'express'
import { getAllReviews, getDeleteReview, getFoodItems, getRestaurantById, getRestaurants, getReview, postAddReview, postAddToCart, postUpdateReview } from '../controllers/user.controller.js';

const router = express.Router()

router.post('/add-review',postAddReview);
router.post('/update-review/:reviewId',postUpdateReview)
router.get('/delete-review/:reviewId',getDeleteReview)
router.get('/get-all-reviews',getAllReviews)
router.get('/get-review/:reviewId',getReview)
router.get('/restaurants',getRestaurants)
router.get('/restaurants/:restaurantId',getRestaurantById)
router.get('/get-food-items/:restaurantid',getFoodItems)
router.post('/add-to-cart',postAddToCart)


export default router;
