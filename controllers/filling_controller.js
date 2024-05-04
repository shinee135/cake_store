import { 
    createFillingService, 
    deleteFillingService, 
    getFillingByNameService, 
    updateFillingService 
    } 
from "../models/services/filling_service.js";
import createError from "../ultis/createError.js"

export const createFilling = async(req, res, next) =>{
    try {
        
        // if(req.idFilling !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const filling = await createFillingService(data.name);
        if(filling instanceof Error) return next(filling);
        res.status(200).send(filling);
    } catch (error) {
        next(error)
    }
}

export const getFillingByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const filling = await getFillingByNameService(data.name);
        if(filling instanceof Error) return next(filling);
        res.status(200).send(filling);
        console.log(error);
    } catch (error) {
        next(error)
    }
}
export const updateFilling = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idFilling !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_filling = await updateFillingService(data.name,id)
        if(update_filling instanceof Error) return next(update_filling);
        res.status(200).send(update_filling);
    } catch (error) {
        next(error)   
    }
}
export const deleteFilling = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idFilling !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_filling = await deleteFillingService(id)
        if(delete_filling instanceof Error) return next(delete_filling);
        res.filling(200).send(delete_filling);
    } catch (error) {
        next(error)
    }
}