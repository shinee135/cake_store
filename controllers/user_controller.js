import { Model, Op, where } from "sequelize";
import { 
    // createUserService, 
    deleteUserService, 
    getUsersByNameService, 
    getUsersAllService,
    updateUserService,
    // getUsersByStatusService,
    getUsersByIdService
    } 
from "../models/services/user_service.js";
import createError from "../ultis/createError.js"

// export const createUser = async(req, res, next) =>{
//     try {
        
//         // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
//         const data = req.body;

//         const user = await createUserService(data.name, data.layer,data.shape_id, data.size_id, data.color_id,data.flavor_id,data.filling_id,data.other_features,data.price,data.quantity,data.image_id);

//         if(user instanceof Error) return next(user)
//         if (user.length === 0) {
//             // Nếu không có Bánh nào được tạo thành công
//             return next(createError(400, 'Không thể tạo .'));
//         }
//         res.status(200).send(user);;
//     } catch (error) {
//         next(error)
//     }
// }
export const getUsersAll = async(req, res, next) =>{
    try {
        const data = req.body;
        const users = await getUsersAllService();
        if(users instanceof Error) return next(users);
        res.status(200).send(users);
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const getUsersById  = async(req, res, next) =>{
    try {
        const user = await getUsersByIdService(req.params.id)
        if(user instanceof Error) return next(user)
        return res.status(200).send(user);
    } catch (error) {
        next(error)
    }
}

export const getUsersByName = async (req, res, next) => {
    try {
        const q = req.query;
        const name_user = q.name_user ? `%${q.name_user}%` : null;
        const users = await getUsersByNameService(name_user);
        if (users instanceof Error) return next(users);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
}
// export const getUsersByStatus = async(req, res, next) =>{
//     try {
//         const q = req.query;
        
//         const status = {
//             ...(q.status && {name : {
//                 [Op.like]: `%${q.status}%`,
//             }}),
//         }
//         const data = req.body;
//         const users = await getUsersByStatusService(status);
//         if(users instanceof Error) return next(users);
//         res.status(200).send(users);
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// }


export const updateUser = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_user = await updateUserService(data.name,id, data.phone,data.address,data.email)
        if(update_user instanceof Error) return next(update_user);
        res.status(200).send(update_user);
    } catch (error) {
        next(error)   
    }
}
export const deleteUser = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy bệnh!'))
        const delete_user = await deleteUserService(id)
        if(delete_user instanceof Error) return next(delete_user);
        res.status(200).send(delete_user);
    } catch (error) {
        next(error)
    }
}