const {Router} = require('express');
const router = Router();

module.exports = (pool) => {
  //post /create events data for a user
  router.post('/', (req, res) => {
    const event = req.body;
    console.log(event);
    const user_id = 1;
    const thumbnail = 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const queryString = `INSERT INTO events(user_id, title, location, date, time, description, thumbnail) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
    const values = [user_id, event.title, event.location, event.date, event.time, event.description, thumbnail];
    // const values = [user_id, event.title, event.location, event.password, event.date, event.description];
    return pool
      .query(queryString, values)
      .then(result => {
        console.log(result);
        if (!result) {
          console.log("post create result", result);
          res.send({error: "error"});
          return;
        }
        // req.session["user_id"] = result.rows[0].id;
        // console.log(result.rows[0].id);
        // res.redirect(`/`);
        // res.redirect(`/users/${user_id}`);
        res.redirect(`/events/${id}`);
        })
  });

// GET api/events/search
  router.get("/search", (req, res) => {
    const id = req.params.id;
    const query = req.params.query;
    pool
    .query(`
        SELECT *
        FROM events
        WHERE title LIKE $1;`
        , ['%'||query||'%'])
        .then(data => {
            // console.log("api_events data", data);
        console.log("query Data", data);
        const eventsData = data.rows;
        console.log("api_events searchData",eventsData)
        res.json(eventsData);
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

  return router;

};