import db from "./models/entities/index.js";
import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import dotenv from 'dotenv';
import cors from 'cors';

import routerAuth from "./routes/auth_routes.js";
import routerRole from "./routes/role_routes.js";
import routerColor from "./routes/color_routes.js";
import routerFlavor from "./routes/flavor_routes.js";
import routerFilling from "./routes/filling_routes.js";
import routerShape from "./routes/shape_routes.js";
import routerSize from "./routes/size_routes.js";
import routerStatus from "./routes/status_routes.js";
import routerCake from "./routes/cake_routes.js";

dotenv.config()
// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors({
  origin: ['http://localhost:5000'],
  credentials: true
}));

// var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Tung135790?"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// //Connect database
// try {
//     await db.sequelize.authenticate();
//     console.log('Connection database successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
//   // define a root route
  app.get('/home', (req, res) => {
    res.send("Welcome to my web server");
  });

//api
app.use('/api/auth', routerAuth)
app.use('/api/role',routerRole)
app.use('/api/color', routerColor)
app.use('/api/flavor',routerFlavor)
app.use('/api/filling', routerFilling)
app.use('/api/shape',routerShape)
app.use('/api/size', routerSize)
app.use('/api/status',routerStatus)
app.use('/api/cake',routerCake)

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    // connection.connect(function(err){
    //   if(err) throw err;
    //   console.log("Database connected");
    // })
  });
  