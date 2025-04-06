import User from "../models/user.model.js"
import bcrypt from 'bcrypt'


const generateUserTokens = async (user_id)=>{

    const user = await User.findById(user_id)
    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();
    user.refreshToken = refreshToken

    await user.save()

    return {refreshToken,accessToken};

}

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

export const postLogin = async (req,res,next)=>{
    try {
        const {username,email,password} = req.body;
    
        if(!((username || email) && password)){
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
    
        const isMatch =  await bcrypt.compare(password,existingUser.password)
    
        if(!isMatch){
            res.status(400).json({
                msg:'Either Username or password not correct'
            })
        }
    
        const {accessToken,refreshToken} = await generateUserTokens(existingUser._id)
        const options = {
            httpOnly:true
        }
    
        res.status(200)
            .cookie("accessToken",accessToken,options)
            .cookie("refreshToken",refreshToken,options)
            .json({
                existingUser,
                message:"successfully logged in"
            })
    } catch (error) {
        res.status(500).json({
            msg:"Internal Server Error"
        })
        console.log(error)
    }


}