const express = require('express')
const Router = require('router')
const router = Router()

router.get('/',(req,res)=>{
    res.send('welcome!, you are in accounts')
})

module.exports=router