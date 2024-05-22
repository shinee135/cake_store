import { Model, Op, where } from "sequelize";
import { 
    createCakeService, 
    deleteCakeService, 
    getCakesByNameService, 
    getCakesAllService,
    updateCakeService,
    // getCakesByStatusService,
    getCakesByIdService
    } 
from "../models/services/cake_service.js";
import createError from "../ultis/createError.js"

export const createCake = async(req, res, next) =>{
    try {
        
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        const data = req.body;

        const cake = await createCakeService(data.name, data.layer,data.shape_id, data.size_id, data.color_id,data.flavor_id,data.filling_id,data.other_features,data.price,data.quantity,data.image_id);

        if(cake instanceof Error) return next(cake)
        if (cake.length === 0) {
            // Nếu không có Bánh nào được tạo thành công
            return next(createError(400, 'Không thể tạo bất kỳ bệnh nào.'));
        }
        res.status(200).send(cake);;
    } catch (error) {
        next(error)
    }
}
export const getCakesAll = async(req, res, next) =>{
    try {
        const data = req.body;
        const cakes = await getCakesAllService();
        if(cakes instanceof Error) return next(cakes);
        res.status(200).send(cakes);
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const getCakesById  = async(req, res, next) =>{
    try {
        const cake = await getCakesByIdService(req.params.id)
        if(cake instanceof Error) return next(cake)
        return res.status(200).send(cake);
    } catch (error) {
        next(error)
    }
}

export const getCakesByName = async (req, res, next) => {
    try {
        const q = req.query;
        const name_cake = q.name_cake ? `%${q.name_cake}%` : null;
        const cakes = await getCakesByNameService(name_cake);
        if (cakes instanceof Error) return next(cakes);
        res.status(200).send(cakes);
    } catch (error) {
        console.log(error);
        next(error);
    }
}
// export const getCakesByStatus = async(req, res, next) =>{
//     try {
//         const q = req.query;
        
//         const status = {
//             ...(q.status && {name : {
//                 [Op.like]: `%${q.status}%`,
//             }}),
//         }
//         const data = req.body;
//         const cakes = await getCakesByStatusService(status);
//         if(cakes instanceof Error) return next(cakes);
//         res.status(200).send(cakes);
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// }


export const updateCake = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy'))
        const data = req.body;
        const update_cake = await updateCakeService(data.name, data.layer,data.shape_id,data.size_id,data.color_id,data.flavor_id,data.filling_id,data.other_features,data.price,data.quantity,id)
        if(update_cake instanceof Error) return next(update_cake);
        res.status(200).send(update_cake);
    } catch (error) {
        next(error)   
    }
}
export const deleteCake = async(req, res, next) =>{
    try {
        const id = req.params.id;
        // if(req.idRole !== 2) return next(createError(400, 'Bạn không có quyền này!'));
        if(!id) return next(createError(400, 'Không tìm thấy bệnh!'))
        const delete_cake = await deleteCakeService(id)
        if(delete_cake instanceof Error) return next(delete_cake);
        res.status(200).send(delete_cake);
    } catch (error) {
        next(error)
    }
}