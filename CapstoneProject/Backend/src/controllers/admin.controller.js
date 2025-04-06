import Restaurant from '../models/restaurant.model.js'

export const postRestaurant = async (req,res,next) =>{
    const {name,email,address,contact} = req.body

    const {userId, username} = req.body

    if(!name || !email || !address || !contact){
        res.status(400)
        .json({
            msg:"Insufficient Details"
        })
    }

    const existingRestaurant = await Restaurant.findOne({
        $or:[
            {name},
            {email},
            {address},
            {contact}
        ]
    })

    if(existingRestaurant){
        res.status(400)
        .json({
            msg:"Restaurant with one of the details already exists"
        })
    }

    let newRestaurant = await Restaurant.create({
        ownerId:userId,
        name,
        address,
        email,
        contact
    })

    res.status(200)
    .json({
        message:"Restaurant successfully added",
        data:newRestaurant
    })
}