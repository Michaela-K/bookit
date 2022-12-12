const {Router} = require('express');
const router = Router();

module.exports = (pool) => {
// GET api/events
router.get("/", (req, res) => {
  // res.send('List should be in the Terminal Console');
  return pool.query(`SELECT * FROM events`)
  .then(result => {
    return res.json(result.rows)
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

// GET api/events/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  return pool.query(`SELECT * FROM events WHERE id = $1`, [id])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

  return router;

};