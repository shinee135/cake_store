import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createFillingService = async(name) =>{
    try {
        const checkName = await db.filling.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Filling đã tồn tại!')
        const Filling = await db.filling.create({
            name,
        })
        if(!Filling) return createError(400, 'Thêm Filling không thành công!')
        return Filling;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteFillingService = async(id)=>{
    try {
        const Filling = await db.filling.findByPk(id)
        if(!Filling) return createError(400, 'Filling không tồn tại!')
        const delete_Filling = await db.filling.destroy({
            where : {id}
        })
        if(delete_Filling == 0) return createError(400, 'Xoá Filling không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getFillingByNameService = async(name_Filling)=>{
    try {
        const Filling = await db.filling.findAll({where : {name : name_Filling}});
        if(Filling.length == 0) return createError(400, 'Không có Filling!')
        return Filling;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateFillingService = async(name,id)=>{
    try {
        const update_Filling = await db.filling.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Filling[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Filling: true,
            message: 'Chỉnh sửa thành công !',
            update_Filling
        }
    } catch (error) {
        return error;   
    }
}