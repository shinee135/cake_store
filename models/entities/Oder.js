import { Sequelize, DataTypes } from "sequelize";

const Oder = (sequelize) => sequelize.define('Oder',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  }, 
  price:{
    type: Sequelize.STRING,
  },
  isPaid:{
    type:Sequelize.INTEGER,
  },
  address:{
    type:Sequelize.STRING,
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Oder;