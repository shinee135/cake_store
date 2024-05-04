import { Sequelize, DataTypes } from "sequelize";

const Cake = (sequelize) => sequelize.define('Cake',{
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  layer: {
    type:Sequelize.INTEGER,
  },
  shape_id: {
    type:Sequelize.INTEGER,
  }, 
  size_id: {
    type:Sequelize.INTEGER,
  }, 
  color_id: {
    type:Sequelize.INTEGER,
  }, 
  flavor_id: {
    type:Sequelize.INTEGER,
  }, 
  filling_id: {
    type:Sequelize.INTEGER,
  }, 
  other_features: {
    type: Sequelize.STRING,
  }, 
  price: {
    type: Sequelize.STRING,
  },   
  state_id: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  image_id:{
    type: Sequelize.STRING
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Cake;
