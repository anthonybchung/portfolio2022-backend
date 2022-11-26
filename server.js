const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();

/****************************/
/* Import router            */
/****************************/
const sideProjects = require("./routes/sideProjects.routes");

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
module.exports = { app, PORT, HOST, MODE };
