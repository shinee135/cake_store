import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createShapeService = async(name) =>{
    try {
        const checkName = await db.shape.findOne({
            where : {
                name
            }
        })
        if(checkName) return createError(400, 'Shape đã tồn tại!')
        const Shape = await db.shape.create({
            name,
        })
        if(!Shape) return createError(400, 'Thêm Shape không thành công!')
        return Shape;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteShapeService = async(id)=>{
    try {
        const Shape = await db.shape.findByPk(id)
        if(!Shape) return createError(400, 'Shape không tồn tại!')
        const delete_Shape = await db.shape.destroy({
            where : {id}
        })
        if(delete_Shape == 0) return createError(400, 'Xoá Shape không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}

export const getShapeByNameService = async(name_Shape)=>{
    try {
        const Shape = await db.shape.findOne({where : {name : name_Shape}});
        if(Shape.length == 0) return createError(400, 'Không có Shape!')
        return Shape;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getShapeService = async()=>{
    try {
        const Shape = await db.shape.findAll();
        if(Shape.length == 0) return createError(400, 'Không có Shape!')
        return Shape;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const updateShapeService = async(name,id)=>{
    try {
        const update_Shape = await db.shape.update({
            name,
        }, {
            where : {
                id
            }
        })
        if(update_Shape[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            Shape: true,
            message: 'Chỉnh sửa thành công !',
            update_Shape
        }
    } catch (error) {
        return error;   
    }
}
