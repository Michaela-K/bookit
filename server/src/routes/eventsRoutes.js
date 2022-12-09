const {Router} = require('express');
const router = express.Router();
const {pool} = require('../../lib/db.js')


// GET/events/
router.get("/", (req, res) => {
  return pool.query(`SELECT * FROM events`)
  .then(res => {
    return console.log(res)
  })
});

// GET/events/:id
router.get("/:id", (req, res) => {
  res.send('One from the Events List')
});

// POST/events/
router.post("/", (req, res) => {
  res.send('Hello WOrld!')
});

// DELETE/events/
router.delete("/", (req, res) => {
  res.send('Hello WOrld!')
});

// PUT/events/
router.put("/", (req, res) => {
  res.send('Hello WOrld!')
});

module.exports = router;