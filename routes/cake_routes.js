import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteCake ,
     createCake,
     updateCake,
     getCakesByName,
     getCakesAll,
     getCakesByStatus,
     getCakesById
} 
from '../controllers/cake_controller.js';

const routerCake = express.Router()
routerCake.post('/create', createCake)
routerCake.delete('/delete/:id',deleteCake)
routerCake.get('/get',getCakesAll)
routerCake.get('/searchByName',getCakesByName)
routerCake.put('/update/:id',updateCake)
routerCake.get('/searchByStatus',getCakesByStatus)
routerCake.get('/searchById/:id',getCakesById)
export default routerCake;