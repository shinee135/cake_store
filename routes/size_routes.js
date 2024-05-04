import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteSize ,
     createSize,
     updateSize,
     getSizeByName
} 
from '../controllers/size_controller.js';

const routerSize = express.Router()
routerSize.post('/create', createSize)
routerSize.delete('/delete/:id',deleteSize)
routerSize.get('/get',getSizeByName)
routerSize.put('/update/:id',updateSize)
export default routerSize;