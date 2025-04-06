import User from "../models/user.model.js"

export const postSignUp = async (req,res,next)=>{
    try {
        const {username,email,password,contact,address} = req.body
    
        if(!username || !email || !password || !contact || !address){
           res.status(400).json({
            msg:"User details missing"
           })
        }
    
        const existingUser = await User.findOne({
            $or:[
                {username},
                {email}
            ]
        })
    
        if(existingUser){
            res.status(400).json({
                msg:"user details already used"
            })
        }
    
        let newUser = await User.create({
            username:username,
            email:email,
            password:password,
            contact:contact,
            address:address
        })
    
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:error
        })
    }
} 