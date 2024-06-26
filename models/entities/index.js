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
import Oder from "./Oder.js";
import Cart from "./Cart.js";


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
db.oder = Oder(sequelize)
db.cart = Cart(sequelize)

/*__User__*/


/* Cake */ 
db.color.hasMany(db.cake,{
  foreignKey: 'color_id',
})
db.cake.belongsTo(db.color,{
  foreignKey: 'color_id'}),

db.filling.hasMany(db.cake,{
  foreignKey :'filling_id',
})
db.cake.belongsTo(db.filling,{
  foreignKey: 'filling_id'})

db.flavor.hasMany(db.cake,{
  foreignKey: 'flavor_id'
})
db.cake.belongsTo(db.flavor,{
  foreignKey: 'flavor_id'})

db.shape.hasMany(db.cake,{
  foreignKey:'shape_id'
})
db.cake.belongsTo(db.shape,{
  foreignKey: 'shape_id'}),
  
db.size.hasOne(db.cake,{
  foreignKey :'size_id'
})
db.cake.belongsTo(db.size,{
  foreignKey: 'size_id'})


db.image.belongsTo(db.cake,{
  foreignKey :'cake_id'
})
db.cake.hasOne(db.image,{
  foreignKey: 'cake_id'})

/*__Cart__*/

db.user.hasMany(db.cart,{
  foreignKey: 'user_id'
})
db.cart.belongsTo(db.user, {
  foreignKey: 'user_id'
})
db.cart.belongsTo(db.cake,{
  foreignKey: 'cake_id'
})
db.cake.hasMany(db.cart, {
  foreignKey:'cake_id'
})

/*__Oder__*/

db.user.hasMany(db.oder,{
  foreignKey: 'user_id'
})
db.oder.belongsTo(db.user, {
  foreignKey: 'user_id'
})
db.oder.belongsTo(db.cake,{
  foreignKey: 'cake_id'
})
db.cake.hasMany(db.oder, {
  foreignKey:'cake_id'
})
export default db;
