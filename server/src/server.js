// load .env data into process.env
require("dotenv").config(); 
// Web server config
const PORT = process.env.PORT || 8081;
const express = require("express");
const morgan = require("morgan");
const cookieSession = require('cookie-session');
const cors = require('cors');

const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());  //req.body
app.use(cors());
app.use(express.static("public"));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));


//database import from db.js
const {pool} = require("../lib/db");

app.listen(4000)
console.log("server on port 4000")


const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter(pool));

const createRouter = require('./routes/create');
app.use('/create', createRouter(pool));

//API ROUTE HANDLERS
const apiEvents = require('./routes/api/api_events');
app.use('/api/events', apiEvents(pool));

const usersRouter = require('./routes/api/api_users');
app.use('/api/users', usersRouter(pool));