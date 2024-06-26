import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createCartService = async(cake_id,user_id) =>{
    try {
        const Cart = await db.cart.create({
            user_id,
            cake_id
        })
        if(!Cart) return createError(400, 'Thêm Cart không thành công!')
        return Cart;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteCartService = async(id)=>{
    try {
        const Cart = await db.cart.findByPk(id)
        if(!Cart) return createError(400, 'Cart không tồn tại!')
        const delete_Cart = await db.cart.destroy({
            where : {id}
        })
        if(delete_Cart == 0) return createError(400, 'Xoá Cart không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getCartAllService = async()=>{
    try {
        const Cart = await db.cart.findAll({
            include:[
                {
                    model: db.cake,
                    include : [
                               {
                                    model: db.shape
                                },
                                {
                                    model: db.size
                                },
                                {
                                    model: db.color
                                },
                                {
                                    model: db.flavor
                                },
                                {
                                    model: db.filling
                                },
                                {
                                     model: db.image
                                }
                            ]
                },
                {
                    model:db.user
                }
            ]
        });
        if(Cart.length == 0) return createError(400, 'Không có Cart!')
        return Cart;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const getCartsByIdService = async(id) =>{
    try {
        const cart = await db.cart.findOne({
            where : {id},
            include : [
                {
                    model : db.cake,
                    include : [
                               {
                                    model: db.shape
                                },
                                {
                                    model: db.size
                                },
                                {
                                    model: db.color
                                },
                                {
                                    model: db.flavor
                                },
                                {
                                    model: db.filling
                                },
                                {
                                     model: db.image
                                }
                            ]
                },
                {
                    model : db.user,
                }
            ]   
        })
        if(!cart) return createError(400, 'Không có Cart!')
        return cart;
    } catch (error) {
        console.log(error)
        return error;
    }
} 

export const getCartsByUserService = async(user_id) =>{
    try {
        const cart = await db.cart.findAll({
            where : {
                user_id : user_id
            },
            include : [
                {
                    model : db.cake,
                    include : [
                               {
                                    model: db.shape
                                },
                                {
                                    model: db.size
                                },
                                {
                                    model: db.color
                                },
                                {
                                    model: db.flavor
                                },
                                {
                                    model: db.filling
                                },
                                {
                                     model: db.image
                                }
                            ]
                },
                {
                    model : db.user,
                }
            ]   
        })
        if(!cart) return createError(400, 'Không có Cart!')
        return cart;
    } catch (error) {
        console.log(error)
        return error;
    }
} 
export const updateCartService = async(id,cake_id)=>{
    try {
        const update_Cart = await db.cart.update({
            cake_id,
        }, {
            where : {
                id
            }
        })
        if(update_Cart[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Cart: true,
            message: 'Chỉnh sửa thành công !',
            update_Cart
        }
    } catch (error) {
        return error;   
    }
}

export const getCartByArrIdService = async(user_id, id) =>{
    try {
        console.log(id)
        const carts = await db.cart.findAll({
            where:{
                [Op.and] : [
                    {user_id : user_id},
                    {id : id}
                ]
            },
            include : [
                {
                    model : db.cake,
                    include : [
                               {
                                    model: db.shape
                                },
                                {
                                    model: db.size
                                },
                                {
                                    model: db.color
                                },
                                {
                                    model: db.flavor
                                },
                                {
                                    model: db.filling
                                },
                                {
                                     model: db.image
                                }
                            ]
                }
            ]
        })
        if(carts.length == 0) return createError(400, 'Không có sản phẩm !')
        return carts;
    } catch (error) {
        return error;   
    }
}
