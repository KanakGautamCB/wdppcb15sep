import express from 'express'
import { addPerson, deletePerson, getAllPersons, getFilteredPerson } from '../controller/personController.js';


const router = express.Router();

router.post('/addPerson',addPerson)
router.get('/getAllPerson',getAllPersons)
router.post('/deletePerson',deletePerson)
router.get('/getPerson',getFilteredPerson)

export default router