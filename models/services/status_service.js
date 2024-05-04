import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createStatusService = async(name) =>{
    try {
        const checkName = await db.status.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Status đã tồn tại!')
        const Status = await db.status.create({
            name,
        })
        if(!Status) return createError(400, 'Thêm Status không thành công!')
        return Status;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteStatusService = async(id)=>{
    try {
        const Status = await db.status.findByPk(id)
        if(!Status) return createError(400, 'Status không tồn tại!')
        const delete_Status = await db.status.destroy({
            where : {id}
        })
        if(delete_Status == 0) return createError(400, 'Xoá Status không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getStatusByNameService = async(name_Status)=>{
    try {
        const Status = await db.status.findAll({where : {name : name_Status}});
        if(Status.length == 0) return createError(400, 'Không có Status!')
        return Status;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const updateStatusService = async(name,id)=>{
    try {
        const update_Status = await db.status.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Status[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Status: true,
            message: 'Chỉnh sửa thành công !',
            update_Status
        }
    } catch (error) {
        return error;   
    }
}