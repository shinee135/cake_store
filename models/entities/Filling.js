import { Sequelize, DataTypes } from "sequelize";

const Filling = (sequelize) => sequelize.define('Filling',{
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
export default Filling;