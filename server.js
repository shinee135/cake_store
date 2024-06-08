import db from "./models/entities/index.js";
import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import dotenv from 'dotenv';
import cors from 'cors';
import multer from "multer";


import routerAuth from "./routes/auth_routes.js";
import routerRole from "./routes/role_routes.js";
import routerColor from "./routes/color_routes.js";
import routerFlavor from "./routes/flavor_routes.js";
import routerFilling from "./routes/filling_routes.js";
import routerShape from "./routes/shape_routes.js";
import routerSize from "./routes/size_routes.js";
import routerStatus from "./routes/status_routes.js";
import routerCake from "./routes/cake_routes.js";
import routerUser from "./routes/user_routes.js";

dotenv.config()
// create express app
const app = express();


// Setup server port
const port = process.env.PORT || 5000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the directory to save the uploaded files
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a timestamp
  }
});

const upload = multer({ storage: storage });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors({

  origin: ['http://localhost:3000','https://cake-store-lvhd.onrender.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']

}));

//Connect database
try {
  await db.sequelize.authenticate();
  console.log('Connection database successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

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
app.use('/api/user',routerUser)

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    // connection.connect(function(err){
    //   if(err) throw err;
    //   console.log("Database connected");
    // })
  });
  
