const { Router } = require("express");
const router = Router();
// const {pool} = require('../../lib/db.js')

module.exports = (pool) => {

  // GET /events/:id/edit
  router.get("/:id/edit", (req, res) => {
    const templateVars = {
      user_id: req.session["user_id"],
      id: req.params.id,
    };
    res.render("edit", templateVars);
  });

  // GET /events/:eventId
  router.get("/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    return pool
      .query(`SELECT * FROM events WHERE id = $1;`, [eventId])
      .then((result) => {
        return res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
