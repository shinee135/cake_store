import express from 'express'
// import { verifyjson } from '../middleware/jwt.js';
import {
     deleteUser ,
     updateUser,
     getUsersByName,
     getUsersAll,
     getUsersById
} 
from '../controllers/user_controller.js';

const routerUser = express.Router()
routerUser.delete('/delete/:id',deleteUser)
routerUser.get('/get',getUsersAll)
routerUser.get('/searchByName',getUsersByName)
routerUser.get('/searchById',getUsersById)
routerUser.put('/update/:id',updateUser)
export default routerUser;