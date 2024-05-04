import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op } from "sequelize";
export const createCakeService = async (name, layer, shape_id, size_id,color_id,flavor_id,filling_id,other_features,price,state_id,quantity) => {
    try {
        // Kiểm tra xem bánh có tồn tại không
        const checkName = await db.cake.findOne({
            where: {
                name
            }
        });

        if (checkName) {
            throw createError(400, 'Bánh đã tồn tại!');
        }

        try {
            // Tạo mới bánh
            const cake = await db.cake.create({
                name,
                layer,
                shape_id,
                size_id,
                color_id,
                flavor_id,
                filling_id,
                other_features,
                price,
                state_id,
                quantity
            },);

            return cake;
        } catch (error) {
            // Nếu có lỗi
            throw error;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const deleteCakeService = async(id)=>{
    try {
        const cake = await db.cake.findByPk(id)
        if(!cake) return createError(400, 'Bánh không tồn tại!')
        const delete_cake = await db.cake.destroy({
            where : {id}
        })
        const deleted_status = await db.cake_status.destroy({
            where: {
                id: cakeId
            }
        });
        
        if(delete_cake == 0) return createError(400, 'Xoá Bệnh không thành công!');
        if(deleted_status == 0) return createError(400, 'Xoá trạng thái không thành công!');
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}
export const getCakesAllService = async()=>{
    try {
        const cakes = await db.cake.findAll({
            // include:[
            //     {
            //         model: db.shape
            //     },
            //     {
            //         model: db.size
            //     },
            //     {
            //         model: db.color
            //     },
            //     {
            //         model: db.flavor
            //     },
            //     {
            //         model: db.filling
            //     },
            //     {
            //         model: db.status
            //     },
            //     {
            //         model: db.image
            //     }
            // ],
        });
        if(cakes.length == 0) return createError(400, 'Không có Bệnh!')
        return cakes;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const getCakesByIdService = async(id) =>{
    try {
        const cake = await db.cake.findOne({
            where : {id},
            // include : [
            //     {
            //         model : db.,
            //     },
            // ]   
        })
        if(!cake) return createError(400, 'Không có sách!')
        return cake;
    } catch (error) {
        return error;
    }
}   

export const getCakesByNameService = async (name_cake) => {
    try {
        const cakes = await db.cake.findOne({
            include: [
                {
                    model: db.status,
                },
                {
                    model: db.diet,
                }
            ],
            where: name_cake ? { name: { [Op.like]: name_cake } } : {} // Chỉ áp dụng toán tử like khi name_cake tồn tại
        });
        if (cakes.length === 0) return createError(400, 'Không có Bệnh!');
        return cakes;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const getCakesByStatusService = async(name_status)=>{
    try {
        const cakes = await db.cake.findAll({
            include:[
                {
                    model:db.status,
                    where :name_status
                },
                {
                    model:db.diet,
                }
            ],

        });
        if(cakes.length == 0) return createError(400, 'Không có Bệnh!')
        return cakes;
    } catch (error) {
        console.log(error)
    }
}
export const updateCakeService = async(name,info,id)=>{
    try {
        const update_cake = await db.cake.update({
            name,
            info
        }, {
            where : {
                id
            }
        })
        if(update_cake[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            status: true,
            message: 'Chỉnh sửa thành công !',
            update_cake
        }
    } catch (error) {
        return error;   
    }
}