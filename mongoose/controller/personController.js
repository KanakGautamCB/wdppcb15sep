import mongoose from "mongoose";
import person from "../models/person.js";

const addPerson = async (req,res)=>{
    const {rollNo, name, age,gender,hobby}=req.body;
    if(!rollNo || !name || !age || !gender){
        res.status(400).json({
            msg:'Incomplete Data'
        })
    }

    try {
        let data = await person.create({
            rollNo,
            name,
            age,
            gender,
            hobby:hobby || ''
        })
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(500).json({
            msg:"Server Side Error"
        })
    }
}

const getAllPersons = async (req,res)=>{
    try {
        let data = await person.find();
        res.status(200).json({
            data
        })

    } catch (error) {
        res.status(500).json({
            msg:"Server Side Error"
        })
    }
}



export {addPerson,getAllPersons};