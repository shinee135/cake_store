import { 
    createShapeService, 
    deleteShapeService, 
    getShapeByNameService, 
    updateShapeService,
    getShapeService
    } 
from "../models/services/shape_service.js";
import createError from "../ultis/createError.js"

export const createShape = async(req, res, next) =>{
    try {
        
        // if(req.idShape !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const shape = await createShapeService(data.name);
        if(shape instanceof Error) return next(shape);
        res.status(200).send(shape);
    } catch (error) {
        next(error)
    }
}

export const getShapeByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const shape = await getShapeByNameService(data.name);
        if(shape instanceof Error) return next(shape);
        res.status(200).send(shape);
        console.log(error);
    } catch (error) {
        next(error)
    }
}

export const getShape = async(req, res, next) =>{
    try {
        const data = req.body;
        const shape = await getShapeService();
        if(shape instanceof Error) return next(shape);
        res.status(200).send(shape);
        console.log(error);
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const updateShape = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idShape !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_shape = await updateShapeService(data.name,id)
        if(update_shape instanceof Error) return next(update_shape);
        res.status(200).send(update_shape);
    } catch (error) {
        next(error)   
    }
}
export const deleteShape = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idShape !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_shape = await deleteShapeService(id)
        if(delete_shape instanceof Error) return next(delete_shape);
        res.shape(200).send(delete_shape);
    } catch (error) {
        next(error)
    }
}
