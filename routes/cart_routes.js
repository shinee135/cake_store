import express from 'express'

import {
    deleteCart,
    createCart,
    updateCart,
    getCartAll,
    getCartsById,
    getCartsByUser
}
from '../controllers/cart_controller.js'

const routerCart = express.Router()
routerCart.post('/create',createCart)
routerCart.delete('/delete/:id',deleteCart)
routerCart.get('/get',getCartAll)
routerCart.get('/searchById/:id',getCartsById)
routerCart.get('/searchByUser/:id',getCartsByUser)
routerCart.put('/update/:id',updateCart)

export default routerCart