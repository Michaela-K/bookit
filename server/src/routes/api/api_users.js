const {Router} = require('express');
const router = Router();

module.exports = (pool) => {
//DELETE  a user
router.delete("/:id", (req, res) => {
  return pool.query("DELETE FROM users where id = $1", [req.params.id])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
});

// Register one user
//  /users/register 
router.post("/register", (req, res) => {
  return pool.query("INSERT INTO users (name, email, password) values ($1, $2, $3) returning *",
    [req.body.name, req.body.email, req.body.password])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
  res.redirect(`api/:id/`);
});

//Update one user
//  /users/update/:id
router.put("/:id", (req, res) => {
  return pool.query("UPDATE users SET name = $1, email = $2, password = $3 where id = $4 returning *",
    [req.body.name, req.body.email, req.body.password, req.params.id])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

// GET one user
//   /users/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  return pool.query(`SELECT * FROM users WHERE id = $1`, [id])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

// GET all users
//   /users
router.get("/", (req, res) => {
  return pool.query(`SELECT * FROM users`)
  .then(result => {
    return res.json(result.rows)
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

return router;

};