import express from 'express'
import { postSignUp } from '../controllers/login.controller.js';


const router = express.Router()

router.post('/signup',postSignUp)
//router.post('/login')


export default router;