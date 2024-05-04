import { 
    createStatusService, 
    deleteStatusService, 
    getStatusByNameService, 
    updateStatusService 
    } 
from "../models/services/status_service.js";
import createError from "../ultis/createError.js"

export const createStatus = async(req, res, next) =>{
    try {
        
        // if(req.idStatus !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const status = await createStatusService(data.name);
        if(status instanceof Error) return next(status);
        res.status(200).send(status);
    } catch (error) {
        next(error)
    }
}

export const getStatusByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const status = await getStatusByNameService(data.name);
        if(status instanceof Error) return next(status);
        res.status(200).send(status);
        console.log(error);
    } catch (error) {
        next(error)
    }
}
export const updateStatus = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idStatus !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_status = await updateStatusService(data.name,id)
        if(update_status instanceof Error) return next(update_status);
        res.status(200).send(update_status);
    } catch (error) {
        next(error)   
    }
}
export const deleteStatus = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idStatus !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_status = await deleteStatusService(id)
        if(delete_status instanceof Error) return next(delete_status);
        res.status(200).send(delete_status);
    } catch (error) {
        next(error)
    }
}