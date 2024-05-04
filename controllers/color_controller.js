import { 
    createColorService, 
    deleteColorService, 
    getColorByNameService, 
    updateColorService 
    } 
from "../models/services/color_service.js";
import createError from "../ultis/createError.js"

export const createColor = async(req, res, next) =>{
    try {
        
        // if(req.idColor !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const color = await createColorService(data.name,data.hex_name);
        if(color instanceof Error) return next(color);
        res.status(200).send(color);
    } catch (error) {
        next(error)
    }
}

export const getColorByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const color = await getColorByNameService(data.name);
        if(color instanceof Error) return next(color);
        res.status(200).send(color);
        console.log(error);
    } catch (error) {
        next(error)
    }
}
export const updateColor = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idColor !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_color = await updateColorService(data.name,id)
        if(update_color instanceof Error) return next(update_color);
        res.status(200).send(update_color);
    } catch (error) {
        next(error)   
    }
}
export const deleteColor = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idColor !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_color = await deleteColorService(id)
        if(delete_color instanceof Error) return next(delete_color);
        res.color(200).send(delete_color);
    } catch (error) {
        next(error)
    }
}