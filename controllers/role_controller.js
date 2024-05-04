import { 
    createRoleService, 
    deleteRoleService, 
    getRoleByNameService, 
    updateRoleService 
    } 
from "../models/services/role_service.js";
import createError from "../ultis/createError.js"

export const createRole = async(req, res, next) =>{
    try {
        
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;
        const role = await createRoleService(data.name);
        if(role instanceof Error) return next(role);
        res.status(200).send(role);
    } catch (error) {
        next(error)
    }
}

export const getRoleByName = async(req, res, next) =>{
    try {
        const data = req.body;
        const role = await getRoleByNameService(data.name);
        if(role instanceof Error) return next(role);
        res.status(200).send(role);
        console.log(error);
    } catch (error) {
        next(error)
    }
}
export const updateRole = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_role = await updateRoleService(data.name,id)
        if(update_role instanceof Error) return next(update_role);
        res.status(200).send(update_role);
    } catch (error) {
        next(error)   
    }
}
export const deleteRole = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy!'))
        const delete_role = await deleteRoleService(id)
        if(delete_role instanceof Error) return next(delete_role);
        res.role(200).send(delete_role);
    } catch (error) {
        next(error)
    }
}