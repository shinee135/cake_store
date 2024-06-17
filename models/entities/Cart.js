import { Sequelize, DataTypes } from "sequelize";

const Cart = (sequelize) => sequelize.define('Cart',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  }, 
  quantity:{
    type: Sequelize.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Cart;