import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteRole ,
     createRole,
     updateRole,
     getRoleByName
} 
from '../controllers/role_controller.js';

const routerRole = express.Router()
routerRole.post('/create', createRole)
routerRole.delete('/delete/:id',deleteRole)
routerRole.get('/get',getRoleByName)
routerRole.put('/update/:id',updateRole)
export default routerRole;