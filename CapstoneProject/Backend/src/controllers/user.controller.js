import Restaurant from '../models/restaurant.model.js'
import User from '../models/user.model.js'

export const postAddReview = async (req, res,next)=>{

    try {
        const {restaurant_id,rating,message}=req.body
        const {user_id,username}=req.body
    
        if(!restaurant_id || !user_id || !rating || !username ){
            res.status(400)
            .json({
                msg:"insufficient details"
            })
        }
    
        const restaurant = await Restaurant.findOne({_id:restaurant_id})
    
        if(!restaurant){
            res.status(400)
            .json({
                msg:"Restaurant not found"
            })
        }
    
        const review = {
            UserId: user_id,
            rating,
            message,
            username
        }
    
        restaurant.reviews.push(review)
        await restaurant.save()
    
        res.status(200)
        .json({
            message:"review successfully added",
            review
        })
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }

}

export const postUpdateReview = async (req,res,next) =>{
    try {
        const {reviewId} = req.params
        const {restaurant_id,rating,message,userId} = req.body
    
        if(!reviewId || !restaurant_id || !userId){
            res.status(400)
                .json({
                    msg:"insufficient details"
                })
        }
    
        const restaurant = await Restaurant.findById(restaurant_id);
    
        const index = restaurant.reviews.findIndex(review => review._id.toString()==reviewId.toString())
    
        if(index==-1){
            res.status(400)
                .json({
                    msg:"Review Not Found"
                })
        }
    
        if(rating)restaurant.reviews[index].rating=rating
        if(message)restaurant.reviews[index].message=message
        
        await restaurant.save()
    
        res.status(200)
        .json({
            message:"Restaurant review updated",
            data: restaurant.reviews[index]
        })
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }

}

export const getDeleteReview = async (req,res,next) =>{
    try {
        const {reviewId} = req.params
        const {restaurant_id,userId} = req.body
    
        const restaurant = await Restaurant.findById(restaurant_id);
    
        const index = restaurant.reviews.findIndex(review => review._id.toString()==reviewId.toString())
    
        if(index==-1){
            res.status(400)
                .json({
                    msg:"Review Not Found"
                })
        }
    
        restaurant.reviews.splice(index,1);
        await restaurant.save()
    
        res.status(200)
            .json({
                message:"Restaurant review deleted"
            })
    
        
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }
    
}

export const getAllReviews = async (req,res,next)=>{

    try {
        const {restaurant_id}=req.body
    
        const restaurant = await Restaurant.findById(restaurant_id);
    
        if(!restaurant){
            res.status(400)
                    .json({
                        msg:"Restaurant Not Found"
                    })
        }
    
        res.status(200)
        .json({
            msg:"Reviews successfully sent",
            reviews:restaurant.reviews
        })
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }
}

export const getReview = async (req,res,next) =>{
    try {
        const {reviewId} = req.params
        const {restaurant_id,userId} = req.body
    
        const restaurant = await Restaurant.findById(restaurant_id);
    
        const index = restaurant.reviews.findIndex(review => review._id.toString()==reviewId.toString())
    
        if(index==-1){
            res.status(400)
                .json({
                    msg:"Review Not Found"
                })
        }
    
    
        res.status(200)
            .json({
                message:"Restaurant review sent",
                review:restaurant.reviews[index]
            })
    
        
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }
    
}

export const getRestaurants = async (req,res,next) =>{
    try {
    
        const restaurants = await Restaurant.find();
    
        if(!restaurants){
            res.status(400)
                .json({
                    msg:"Restaurants Not Found"
                })
        }
    
    
        res.status(200)
            .json({
                message:"Restaurants sent",
                restaurants:restaurants
            })
    
        
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }
    
}


export const getRestaurantById = async (req,res,next) =>{
    try {

        const {restaurantId} = req.params
    
        const restaurant = await Restaurant.findOne({
            _id:restaurantId
        });
    
        if(!restaurant){
            res.status(400)
                .json({
                    msg:"Restaurants Not Found"
                })
        }
    
    
        res.status(200)
            .json({
                message:"Restaurants sent",
                restaurant:restaurant
            })
    
        
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }
    
}

export const getFoodItems = async (req,res,next) =>{
    try {
        const {restaurant_id} = req.body
    
        const restaurant = await Restaurant.findById(restaurant_id);
    
        if(!restaurant){
            res.status(400)
                .json({
                    msg:"Restaurant Not Found"
                })
        }
    
    
        res.status(200)
            .json({
                message:"Restaurant review sent",
                foodItems:restaurant.cusines
            })
    
        
    } catch (error) {
        res.status(500)
        .json({
            msg:error
        })
    }
    
}

export const postAddToCart = async (req,res,next) =>{

    try {
        const {userId,food,quantity} = req.body
    
        const user = await User.findOne({_id:userId})

        console.log(user)
    
        if(!user){
            res.status(400)
                    .json({
                        msg:"User Not Found"
                    })
        }
    
        user.cart.push({
            food:food,
            quantity
        })
    
        await user.save()
    
        res.status(200)
                .json({
                    message:"Items added to cart",
                    cart:user.cart
                })
    } catch (error) {
        res.status(500)
        .json({
            msg:"Internal Server Error"
        })
    }
}

