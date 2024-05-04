import { Sequelize, DataTypes } from "sequelize";

const Color = (sequelize) => sequelize.define('Color',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  }, 
  name:{
    type: Sequelize.STRING,
  },
  hex_name:{
    type:Sequelize.STRING,
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Color;