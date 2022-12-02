// load .env data into process.env
// require("dotenv").config(); 
// Web server config
// const PORT = process.env.PORT || 8081;
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'))
// const router = express.Router();
// const cookieSession = require('cookie-session');
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }));

app.listen(4000)
console.log("server on port 4000")

app.use(express.static("public"));

const usersRouter = require('./routes/usersRoutes');
app.use('/users', usersRouter);