import e from "express";
import db from "../entities/index.js"
import createError from "../../ultis/createError.js";
import { Op, col, where } from "sequelize";
// export const createUserService = async (name, layer, shape_id, size_id, color_id, flavor_id, filling_id, other_features, price, quantity) => {
//     try {
//         // Kiểm tra xem bánh có tồn tại không
//         const checkName = await db.user.findOne({
//             where: { name }
//         });

//         if (checkName) {
//             throw new Error('Bánh đã tồn tại!');
//         }

//         try {
//             // Tạo mới bánh
//             const user = await db.user.create({
//                 name,
//                 layer,
//                 shape_id,
//                 size_id,
//                 color_id,
//                 flavor_id,
//                 filling_id,
//                 other_features,
//                 price,
//                 quantity
//             });

//             return user;
//         } catch (error) {
//             // Nếu có lỗi khi tạo bánh hoặc thêm các mối quan hệ
//             throw error;
//         }
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };



export const deleteUserService = async(id)=>{
    try {
        const user = await db.user.findByPk(id)
        if(!user) return createError(400, 'Bánh không tồn tại!')
        const delete_user = await db.user.destroy({
            where : {id}
        })
        
        if(delete_user == 0) return createError(400, 'Xoá  không thành công!');
       
        return {
            message: 'Xoá thành công!'
        };
    } catch (error) {
        return error;
    }
}
export const getUsersAllService = async()=>{
    try {
        const users = await db.user.findAll({});
        if(users.length == 0) return createError(400, 'Không có !')
        return users;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const getUsersByIdService = async(id) =>{
    try {
        const user = await db.user.findOne({
            where : {id},

        })
        if(!user) return createError(400, 'Không có User!')
        return user;
    } catch (error) {
        console.log(error)
        return error;
    }
}   

export const getUsersByNameService = async (name_user) => {
    try {
        const users = await db.user.findOne({
             where: name_user ? { name: { [Op.like]: name_user } } : {} // Chỉ áp dụng toán tử like khi name_user tồn tại
        });
        if (users.length === 0) return createError(400, 'Không có Bánh!');
        return users;
    } catch (error) {
        console.log(error);
        return error;
    }
}
// export const getUsersByStatusService = async(name_status)=>{
//     try {
//         const users = await db.user.findAll({
//             include:[
//                 {
//                     model:db.status,
//                     where :name_status
//                 },
//                 {
//                     model:db.diet,
//                 }
//             ],

//         });
//         if(users.length == 0) return createError(400, 'Không có Bệnh!')
//         return users;
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getUsersByQueryService = async(filter) => {

    try {

        const usersByQuery = await db.user.findAll({
            include : [
                {
                    model : db.color,
                    where : color
                },
                {
                    model : db.filling,
                    where : filling
                },
                {
                    model : db.flavor,
                    where : flavor
                }
            ]
        })
    } catch (error) {
        return error
    }
}

export const updateUserService = async(name,id,phone,address,email)=>{
    try {
        const update_user = await db.user.update({
            name,
            phone,
            email,
            address
        }, {
            where : {
                id
            }
        })
        if(update_user[0] == 0) return createError(400, 'Chỉnh sửa không thành công!')
        return {
            status: true,
            message: 'Chỉnh sửa thành công !',
            update_user
        }
    } catch (error) {
        console.log(error)
        return error;   
    }
}