import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createSizeService = async(name) =>{
    try {
        const checkName = await db.size.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Size đã tồn tại!')
        const Size = await db.size.create({
            name,
        })
        if(!Size) return createError(400, 'Thêm Size không thành công!')
        return Size;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteSizeService = async(id)=>{
    try {
        const Size = await db.size.findByPk(id)
        if(!Size) return createError(400, 'Size không tồn tại!')
        const delete_Size = await db.size.destroy({
            where : {id}
        })
        if(delete_Size == 0) return createError(400, 'Xoá Size không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getSizeByNameService = async(name_Size)=>{
    try {
        const Size = await db.size.findAll({where : {name : name_Size}});
        if(Size.length == 0) return createError(400, 'Không có Size!')
        return Size;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateSizeService = async(name,id)=>{
    try {
        const update_Size = await db.size.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Size[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Size: true,
            message: 'Chỉnh sửa thành công !',
            update_Size
        }
    } catch (error) {
        return error;   
    }
}