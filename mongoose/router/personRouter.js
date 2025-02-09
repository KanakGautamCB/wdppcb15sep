import express from 'express'
import { addPerson, getAllPersons } from '../controller/personController.js';


const router = express.Router();

router.post('/addPerson',addPerson)
router.get('/getAllPerson',getAllPersons)

export default router