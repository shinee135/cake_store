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
  other_features: {
    type: Sequelize.STRING,
  }, 
  price: {
    type: Sequelize.STRING,
  },   
  quantity: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    type: DataTypes.DATE, 
      allowNull: false
},
}
)
export default Cake;
