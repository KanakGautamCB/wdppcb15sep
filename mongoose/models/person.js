import mongoose from "mongoose";
const {Schema} = mongoose;

const personSchema = new Schema({
    rollNo:{
        type:Number,
        required:true
    },
    name :{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    hobby:{
        type:String,
        required:false
    }
})


export default mongoose.model('Person',personSchema)