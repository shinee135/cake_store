import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createColorService = async(name,hex_name) =>{
    try {
        const checkName = await db.color.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Color đã tồn tại!')
        const Color = await db.color.create({
            name,
            hex_name
        })
        if(!Color) return createError(400, 'Thêm Color không thành công!')
        return Color;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteColorService = async(id)=>{
    try {
        const Color = await db.color.findByPk(id)
        if(!Color) return createError(400, 'Color không tồn tại!')
        const delete_Color = await db.color.destroy({
            where : {id}
        })
        if(delete_Color == 0) return createError(400, 'Xoá Color không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getColorByNameService = async(name_Color)=>{
    try {
        const Color = await db.color.findAll({where : {name : name_Color}});
        if(Color.length == 0) return createError(400, 'Không có Color!')
        return Color;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateColorService = async(name,id)=>{
    try {
        const update_Color = await db.color.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Color[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Color: true,
            message: 'Chỉnh sửa thành công !',
            update_Color
        }
    } catch (error) {
        return error;   
    }
}