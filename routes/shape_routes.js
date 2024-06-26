import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteShape ,
     createShape,
     updateShape,
     getShapeByName,
     getShape
} 
from '../controllers/shape_controller.js';

const routerShape = express.Router()
routerShape.post('/create', createShape)
routerShape.delete('/delete/:id',deleteShape)
routerShape.get('/',getShape)
routerShape.get('/get',getShapeByName)
routerShape.put('/update/:id',updateShape)
export default routerShape;
