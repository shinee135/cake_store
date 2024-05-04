import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createRoleService = async(name) =>{
    try {
        const checkName = await db.role.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Role đã tồn tại!')
        const Role = await db.role.create({
            name,
        })
        if(!Role) return createError(400, 'Thêm Role không thành công!')
        return Role;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteRoleService = async(id)=>{
    try {
        const Role = await db.role.findByPk(id)
        if(!Role) return createError(400, 'Role không tồn tại!')
        const delete_Role = await db.role.destroy({
            where : {id}
        })
        if(delete_Role == 0) return createError(400, 'Xoá Role không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getRoleByNameService = async(name_Role)=>{
    try {
        const Role = await db.role.findAll({where : {name : name_Role}});
        if(Role.length == 0) return createError(400, 'Không có Role!')
        return Role;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateRoleService = async(name,id)=>{
    try {
        const update_Role = await db.role.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Role[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Role: true,
            message: 'Chỉnh sửa thành công !',
            update_Role
        }
    } catch (error) {
        return error;   
    }
}