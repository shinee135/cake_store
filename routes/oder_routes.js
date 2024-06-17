import express from 'express'

import {
    deleteOder,
    createOder,
    updateOder,
    getOderAll,
    getOderById
}
from '../controllers/oder_controller.js'

const routerOder = express.Router()
routerOder.post('/create',createOder)
routerOder.delete('/delete/:id',deleteOder)
routerOder.get('/get',getOderAll)
routerOder.get('/searchById/:id',getOderById)
routerOder.put('/update/:id',updateOder)

export default routerOder;