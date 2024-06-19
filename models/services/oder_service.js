import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createOderService = async(price,isPaid,cake_id,user_id,address,quantity) =>{
    try {
        const Oder = await db.oder.create({
            price,
            isPaid,
            user_id,
            cake_id,
            address,
            quantity
        })
        if(!Oder) return createError(400, 'Thêm Oder không thành công!')
        return Oder;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteOderService = async(id)=>{
    try {
        const Oder = await db.oder.findByPk(id)
        if(!Oder) return createError(400, 'Oder không tồn tại!')
        const delete_Oder = await db.oder.destroy({
            where : {id}
        })
        if(delete_Oder == 0) return createError(400, 'Xoá Oder không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getOderAllService = async()=>{
    try {
        const Oder = await db.oder.findAll({
            include:[
                {
                    model: db.cake,
                    include :[
                        {
                            model : db.cart
                        },
                        {
                            model : db.image
                        }
                    ]
                },
                {
                    model:db.user
                }
            ]
        });
        if(Oder.length == 0) return createError(400, 'Không có Oder!')
        return Oder;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getOderByIdService = async(id) =>{
    try {
        const oder = await db.oder.findOne({
            where : {id},
            include : [
                {
                    model: db.cake,
                    include :[
                        {
                            model : db.cart
                        },
                        {
                            model : db.image
                        }
                    ]
                },
                {
                    model : db.user,
                }
            ]   
        })
        if(!oder) return createError(400, 'Không có Cart!')
        return oder;
    } catch (error) {
        console.log(error)
        return error;
    }
} 

export const getOdersByUserService = async(user_id) =>{
    try {
        const oder = await db.oder.findAll({
            where : {
                user_id : user_id
            },
            include : [
                {
                    model: db.cake,
                    include :[
                        {
                            model : db.cart
                        },
                        {
                            model : db.image
                        }
                    ]
                },
                {
                    model : db.user,
                }
            ]   
        })
        if(!oder) return createError(400, 'Không có Oder!')
        return oder;
    } catch (error) {
        console.log(error)
        return error;
    }
} 

export const updateOderService = async(id,isPaid,address,price,quantity)=>{
    try {
        const update_Oder = await db.oder.update({
            isPaid,
            address,
            price,
            quantity
        }, {
            where : {
                id
            }
        })
        if(update_Oder[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Oder: true,
            message: 'Chỉnh sửa thành công !',
            update_Oder
        }
    } catch (error) {
        return error;   
    }
}
