import { Model, Op, where } from "sequelize";
import {
    createCartService,
    getCartAllService,
    getCartsByIdService,
    getCartsByUserService,
    deleteCartService,
    updateCartService,
    getCartByArrIdService
} 
from "../models/services/cart_service.js";

import createError from "../ultis/createError.js";

export const createCart = async(req, res, next) =>{
    try {
        
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const cart = await createCartService(data.cake_id,data.user_id,data.quantity);

        if(cart instanceof Error) return next(cart)
        if (cart.length === 0) {
            // Nếu không có Bánh nào được tạo thành công
            return next(createError(400, 'Không thể tạo bất kỳ bệnh nào.'));
        }
        res.status(200).send(cart);;
    } catch (error) {
        next(error)
    }
}
export const getCartAll = async(req, res, next) =>{
    try {
        const data = req.body;
        const carts = await getCartAllService();
        if(carts instanceof Error) return next(carts);
        res.status(200).send(carts);
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const getCartsById  = async(req, res, next) =>{
    try {
        const cart = await getCartsByIdService(req.params.id)
        if(cart instanceof Error) return next(cart)
        return res.status(200).send(cart);
    } catch (error) {
        next(error)
    }
}

export const getCartsByUser  = async(req, res, next) =>{
    try {
        const cart = await getCartsByUserService(req.params.id)
        if(cart instanceof Error) return next(cart)
        return res.status(200).send(cart);
    } catch (error) {
        next(error)
    }
}

export const deleteCart = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy bệnh!'))
        const delete_cart = await deleteCartService(id)
        if(delete_cart instanceof Error) return next(delete_cart);
        res.status(200).send(delete_cart);
    } catch (error) {
        next(error)
    }
}

export const updateCart = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_cart = await updateCartService(id,data.cart_id)
        if(update_cart instanceof Error) return next(update_cart);
        res.status(200).send(update_cart);
    } catch (error) {
        next(error)   
    }
}

export const getCartByArrId = async(req, res, next) =>{
    try {
        const data = req.body;
        console.log(data);
        // if(!user_id) return next(createError(400, 'Bạn cần phải đăng nhập!'))
        const carts = await getCartByArrIdService(data.user_id,data.id);
        if(carts instanceof Error) return next(carts);
        res.status(200).send(carts);
    } catch (error) {
        next(error);
    }
}
