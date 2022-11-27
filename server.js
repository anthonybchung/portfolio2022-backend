const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorhandler.middleware");
dotenv.config();
connectDB();

/****************************/
/* Database connection      */
/****************************/

/****************************/
/* Import router            */
/****************************/
const sideProjects = require("./routes/sideProjects.routes");
const weather = require("./routes/weatherApp.routes");

//Server details
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
const MODE = process.env.NODE_ENV;

const app = express();

// JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helment
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
);

/****************************/
/* Mount router             */
/* from route               */
/****************************/
app.use("/api/v1/side-projects", sideProjects);
app.use("/api/v1/weather", weather);

app.use(errorHandler);
module.exports = { app, PORT, HOST, MODE };
