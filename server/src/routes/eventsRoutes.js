const {Router} = require('express');
const router = Router();
const {pool} = require('../../lib/db.js')


// GET/events/
router.get("/", (req, res) => {
  // res.send('List should be in the Terminal Console');
  return pool.query(`SELECT * FROM events`)
  .then(result => {
    return res.json(result.rows)
  })
  .catch((err) => console.log("ERROR", err.message ));
});

// GET/events/:id
router.get("/:id", (req, res) => {
  // res.send('One from the Events List')
  const id = req.params.id;
  return pool.query(`SELECT * FROM events WHERE id = $1`, [id])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch((err) => console.log("ERROR", err.message ));
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