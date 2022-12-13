// load .env data into process.env
// require("dotenv").config(); 
// Web server config
// const PORT = process.env.PORT || 8081;
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'))
app.use(express.json())
// const router = express.Router();
// const cookieSession = require('cookie-session');
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }));

//database import
const {pool} = require("../lib/db");

app.listen(4000)
console.log("server on port 4000")

app.use(express.static("public"));

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter(pool));

//API ROUTE HANDLERS
const apiEvents = require('./routes/api/api_events');
app.use('/api/events', apiEvents(pool));