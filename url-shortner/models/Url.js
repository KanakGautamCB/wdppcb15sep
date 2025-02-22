const mongoose = require('mongoose')

async function generateShortId(){
    const {nanoid} = await import ('nanoid')
    return nanoid(7);
}

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: false },
    date: { type: Date, default: Date.now }
});

urlSchema.pre('save', function (next){
    if(!this.shortId){
        generateShortId()
        .then((id)=>{
            this.shortId=id
            next()
        })
    }else{
        next()
    }
})

module.exports = mongoose.model('Url',urlSchema);