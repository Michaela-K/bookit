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
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// const router = express.Router();
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {

//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


//database import from db.js
const {pool} = require("../lib/db");

app.listen(4000)
console.log("server on port 4000")


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter(pool));

const createRouter = require('./routes/create');
app.use('/create', createRouter(pool));

//API ROUTE HANDLERS
const apiEvents = require('./routes/api/api_events');
app.use('/api/events', apiEvents(pool));

const usersRouter = require('./routes/api/api_users');
app.use('/api/users', usersRouter(pool));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});