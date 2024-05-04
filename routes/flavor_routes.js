import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteFlavor ,
     createFlavor,
     updateFlavor,
     getFlavorByName
} 
from '../controllers/flavor_controller.js';

const routerFlavor = express.Router()
routerFlavor.post('/create', createFlavor)
routerFlavor.delete('/delete/:id',deleteFlavor)
routerFlavor.get('/get',getFlavorByName)
routerFlavor.put('/update/:id',updateFlavor)
export default routerFlavor;