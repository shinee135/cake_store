import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteColor ,
     createColor,
     updateColor,
     getColorByName
} 
from '../controllers/color_controller.js';

const routerColor = express.Router()
routerColor.post('/create', createColor)
routerColor.delete('/delete/:id',deleteColor)
routerColor.get('/get',getColorByName)
routerColor.put('/update/:id',updateColor)
export default routerColor;