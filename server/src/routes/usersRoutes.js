const {Router} = require('express');

const router = Router();

// GET /users/:id
router.get("/", (req, res) => {
  res.send('Hello WOrld!')
});

// GET /users/:id/create
router.get("/", (req, res) => {
  res.send('Hello WOrld!')
});

// GET /users/:id/myevents
router.get("/", (req, res) => {
  res.send('Hello WOrld!')
});
////////////////////


router.post("/", (req, res) => {
  res.send('Hello WOrld!')
});

router.delete("/", (req, res) => {
  res.send('Hello WOrld!')
});

router.put("/", (req, res) => {
  res.send('Hello WOrld!')
});
module.exports = router;