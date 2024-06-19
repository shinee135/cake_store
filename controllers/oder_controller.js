import { Model, Op, where } from "sequelize";
import {
    createOderService,
    deleteOderService,
    getOderAllService,
    getOderByIdService,
    getOdersByUserService,
    updateOderService
} 
from "../models/services/oder_service.js";

import createError from "../ultis/createError.js";

export const createOder = async(req, res, next) =>{
    try {
        
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;

        const oder = await createOderService(data.price,data.isPaid,data.cake_id,data.user_id,data.address,data.quantity);

        if(oder instanceof Error) return next(oder)
        if (oder.length === 0) {
            // Nếu không có Bánh nào được tạo thành công
            return next(createError(400, 'Không thể tạo bất kỳ bệnh nào.'));
        }
        res.status(200).send(oder);;
    } catch (error) {
        next(error)
    }
}
export const getOderAll = async(req, res, next) =>{
    try {
        const data = req.body;
        const oder = await getOderAllService();
        if(oder instanceof Error) return next(oder);
        res.status(200).send(oder);
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const getOderById  = async(req, res, next) =>{
    try {
        const oder = await getOderByIdService(req.params.id)
        if(oder instanceof Error) return next(oder)
        return res.status(200).send(oder);
    } catch (error) {
        next(error)
    }
}

export const getOdersByUser  = async(req, res, next) =>{
    try {
        const oder = await getOdersByUserService(req.params.id)
        if(oder instanceof Error) return next(oder)
        return res.status(200).send(oder);
    } catch (error) {
        next(error)
    }
}

export const deleteOder = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy bệnh!'))
        const delete_oder = await deleteOderService(id)
        if(delete_oder instanceof Error) return next(delete_oder);
        res.status(200).send(delete_oder);
    } catch (error) {
        next(error)
    }
}

export const updateOder = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_oder = await updateOderService(id,data.price,data.isPaid,data.address)
        if(update_oder instanceof Error) return next(update_oder);
        res.status(200).send(update_oder);
    } catch (error) {
        next(error)   
    }
}
