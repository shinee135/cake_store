import { 
    createSizeService, 
    deleteSizeService, 
    getSizeByNameService, 
    updateSizeService 
    } 
from "../models/services/size_service.js";
import createError from "../ultis/createError.js"

export const createSize = async(req, res, next) =>{
    try {
        
        // if(req.idSize !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const size = await createSizeService(data.name);
        if(size instanceof Error) return next(size);
        res.status(200).send(size);
    } catch (error) {
        next(error)
    }
}

export const getSizeByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const size = await getSizeByNameService(data.name);
        if(size instanceof Error) return next(size);
        res.status(200).send(size);
        console.log(error);
    } catch (error) {
        next(error)
    }
}
export const updateSize = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idSize !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_size = await updateSizeService(data.name,id)
        if(update_size instanceof Error) return next(update_size);
        res.status(200).send(update_size);
    } catch (error) {
        next(error)   
    }
}
export const deleteSize = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idSize !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_size = await deleteSizeService(id)
        if(delete_size instanceof Error) return next(delete_size);
        res.size(200).send(delete_size);
    } catch (error) {
        next(error)
    }
}