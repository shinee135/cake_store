import { 
    createFlavorService, 
    deleteFlavorService, 
    getFlavorByNameService, 
    updateFlavorService 
    } 
from "../models/services/flavor_service.js";
import createError from "../ultis/createError.js"

export const createFlavor = async(req, res, next) =>{
    try {
        
        // if(req.idFlavor !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const flavor = await createFlavorService(data.name);
        if(flavor instanceof Error) return next(flavor);
        res.status(200).send(flavor);
    } catch (error) {
        next(error)
    }
}

export const getFlavorByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const flavor = await getFlavorByNameService(data.name);
        if(flavor instanceof Error) return next(flavor);
        res.status(200).send(flavor);
        console.log(error);
    } catch (error) {
        next(error)
    }
}
export const updateFlavor = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idFlavor !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_flavor = await updateFlavorService(data.name,id)
        if(update_flavor instanceof Error) return next(update_flavor);
        res.status(200).send(update_flavor);
    } catch (error) {
        next(error)   
    }
}
export const deleteFlavor = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idFlavor !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_flavor = await deleteFlavorService(id)
        if(delete_flavor instanceof Error) return next(delete_flavor);
        res.flavor(200).send(delete_flavor);
    } catch (error) {
        next(error)
    }
}