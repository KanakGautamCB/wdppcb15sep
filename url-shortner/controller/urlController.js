const Url = require('../models/Url.js')

const addUrl = async (req,res)=>{
    const {originalUrl} = req.body;
    if(!originalUrl){
        res.status(400).json({
            msg:"Invalid Url"
        })
    }
    try {
        const url = new Url({originalUrl})
        let data = await url.save()

        res.status(200).json({
            data,
            msg:"successfully saved"
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"Unable to save Url"
        })
    }
}

const getUrl = async (req,res)=>{
    const {shortUrl} = req.params;
    console.log(req.params)
    if(!shortUrl){
        res.status(400).json({
            msg:"Short Url not received"
        })
    }

    try {
        let url = await Url.findOne({shortId:shortUrl})
        if(url){
            res.redirect(`https://${url.originalUrl}`)
        }else{
            res.status(404).json({
                msg:"Url Not found"
            })
        }

    } catch (error) {
        res.status(500).json({
            msg:"Unable to find Url"
        })
    }
}

module.exports={
    addUrl,
    getUrl
}