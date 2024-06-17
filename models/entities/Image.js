import { Sequelize, DataTypes } from "sequelize";

const Image = (sequelize) => sequelize.define('Image',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  }, 
  image_url:{
    type: Sequelize.STRING,
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Image;
