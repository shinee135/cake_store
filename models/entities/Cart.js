import { Sequelize, DataTypes } from "sequelize";

const Cart = (sequelize) => sequelize.define('Cart',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  }, 
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Cart;