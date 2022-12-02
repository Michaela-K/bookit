const {Router} = require('express');

const router = Router();

// GET/tasks/
router.get("/", (req, res) => {
  res.send('Hello WOrld!')
});

// GET/tasks/:id
router.get("/:id", (req, res) => {
  res.send('Hello WOrld!')
});

// POST/tasks/
router.post("/", (req, res) => {
  res.send('Hello WOrld!')
});

// DELETE/tasks/
router.delete("/", (req, res) => {
  res.send('Hello WOrld!')
});

// PUT/tasks/
router.put("/", (req, res) => {
  res.send('Hello WOrld!')
});
module.exports = router;