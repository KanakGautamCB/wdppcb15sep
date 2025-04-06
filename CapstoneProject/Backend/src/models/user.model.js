import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    cart:[
        {
            food:Object,
            quantity:Number
        }
    ],
    refreshToken:{
        type:String
    }

},{
    timestamps:true
})

userSchema.pre(['create','save'], function(next){
    //console.log(this)
    if(!this.isModified('password'))return next();
    console.log(this)
    const user = this;
    bcrypt.hash(user.password,10, (err, hash)=>{
        if(err){
            return next(err)
        }else{
            user.password=hash
            console.log(hash)
            next()
        }
    })
    
})

userSchema.methods.generateAccessToken = async function (){
    return jwt.sign(
        {
            userId:this._id,
            email:this.email,
            username:this.username,
            cart:this.cart
        },
        process.env.ACCESS_TOKEN_KEY
        ,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export default mongoose.model("User",userSchema)