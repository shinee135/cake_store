import configdb from "../../dbconfig/db.config.js";
import { Sequelize } from "sequelize";
import User from "./User.js";
import Role from "./Role.js";
import Cake from "./Cake.js";
import Color from "./Color.js";
import Filling from "./Filling.js";
import Flavor from "./Flavor.js";
import Shape from "./Shape.js";
import Size from "./Size.js";
import Status from "./Status.js";
import Image from "./Image.js";


const sequelize = new Sequelize(
    configdb.DB,
    configdb.USER,
    configdb.PASSWORD,
    {
      host: configdb.HOST,
      dialect: configdb.dialect,
      operatorsAliases: 0,
  
      pool: {
        max: configdb.pool.max,
        min: configdb.pool.min,
        acquire: configdb.pool.acquire,
        idle: configdb.pool.idle
      },
      logging: false
    }
);

const db = {}
db.sequelize = sequelize
db.user = User(sequelize)
db.role = Role(sequelize)
db.cake = Cake(sequelize)
db.color = Color(sequelize)
db.filling = Filling(sequelize)
db.flavor = Flavor(sequelize)
db.shape = Shape(sequelize)
db.size = Size(sequelize)
db.status = Status(sequelize)
db.image = Image(sequelize)

db.cake.hasOne(db.color)
db.color.belongsTo(db.cake,{
  foreignKey: 'color_id'}),

db.cake.hasOne(db.filling)
db.filling.belongsTo(db.cake,{
  foreignKey: 'filling_id'})

db.cake.hasOne(db.flavor)
db.flavor.belongsTo(db.cake,{
  foreignKey: 'flavor_id'})

db.cake.hasOne(db.shape)
db.shape.belongsTo(db.cake,{
  foreignKey: 'shape_id'}),
  
db.cake.hasOne(db.size)
db.size.belongsTo(db.cake,{
  foreignKey: 'size_id'})
  
db.cake.hasOne(db.status)
db.status.belongsTo(db.cake,{
  foreignKey: 'state_id'})

db.cake.hasOne(db.image)
db.image.belongsTo(db.cake,{
  foreignKey: 'image_id'})
export default db;