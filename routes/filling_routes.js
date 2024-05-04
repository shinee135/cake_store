import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteFilling ,
     createFilling,
     updateFilling,
     getFillingByName
} 
from '../controllers/filling_controller.js';

const routerFilling = express.Router()
routerFilling.post('/create', createFilling)
routerFilling.delete('/delete/:id',deleteFilling)
routerFilling.get('/get',getFillingByName)
routerFilling.put('/update/:id',updateFilling)
export default routerFilling;