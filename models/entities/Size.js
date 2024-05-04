import { Sequelize, DataTypes } from "sequelize";

const Size = (sequelize) => sequelize.define('Size',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  }, 
  name:{
    type: Sequelize.STRING,
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Size;