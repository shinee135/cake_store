import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createFlavorService = async(name) =>{
    try {
        const checkName = await db.flavor.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Flavor đã tồn tại!')
        const Flavor = await db.flavor.create({
            name,
        })
        if(!Flavor) return createError(400, 'Thêm Flavor không thành công!')
        return Flavor;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteFlavorService = async(id)=>{
    try {
        const Flavor = await db.flavor.findByPk(id)
        if(!Flavor) return createError(400, 'Flavor không tồn tại!')
        const delete_Flavor = await db.flavor.destroy({
            where : {id}
        })
        if(delete_Flavor == 0) return createError(400, 'Xoá Flavor không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getFlavorByNameService = async(name_Flavor)=>{
    try {
        const Flavor = await db.flavor.findAll({where : {name : name_Flavor}});
        if(Flavor.length == 0) return createError(400, 'Không có Flavor!')
        return Flavor;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateFlavorService = async(name,id)=>{
    try {
        const update_Flavor = await db.flavor.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Flavor[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Flavor: true,
            message: 'Chỉnh sửa thành công !',
            update_Flavor
        }
    } catch (error) {
        return error;   
    }
}