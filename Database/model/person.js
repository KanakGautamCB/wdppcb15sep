import mongoose, {Schema} from "mongoose";

const personSchema = new Schema({
    name:{type:String, required:true},
    age:{type:Number},
    book_ids:[{type:Schema.Types.ObjectId, ref:'Book'}]
})

export default mongoose.model('Person', personSchema)