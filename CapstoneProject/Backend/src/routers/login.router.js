import express from 'express'
import { postSignUp, postLogin } from '../controllers/login.controller.js';


const router = express.Router()

router.post('/signup',postSignUp)
router.post('/login',postLogin)


export default router;