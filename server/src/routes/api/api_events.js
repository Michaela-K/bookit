const {Router} = require('express');
const router = Router();

module.exports = (pool) => {
  //DELETE  an event
router.delete("/:id", (req, res) => {
  return pool.query("DELETE FROM events where id = $1", [req.params.id])
  .then(result => {
    return res.json(result.rows[0])
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
});

  //post /create events data for a user
  router.post('/:id', (req, res) => {
    const event = req.body;
    console.log(event);
    const user_id = req.params.id;
    // const thumbnail = 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const queryString = `INSERT INTO events(user_id, title, location, start, enddate, description, thumbnail) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
    const values = [user_id, event.title, event.location, event.start, event.enddate, event.description, event.thumbnail];
    // const values = [user_id, event.title, event.location, event.password, event.date, event.description];
    return pool
      .query(queryString, values)
      .then(result => {
        console.log(result);
        return res.json(result.rows[0])
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

// GET api/events/search
  router.get("/search", (req, res) => {
    const id = req.params.id;
    const query = req.params.query;
    pool.query(`SELECT * FROM events WHERE title LIKE $1;`, ['%'||query||'%'])
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

//Update one evemnt
//  /events/update/:id
router.put("/:id", (req, res) => {
  const event = req.body;
  return pool.query("UPDATE events SET user_id = $1, title = $2, location = $3, start = $4, enddate = $5, description = $6, thumbnail = $7 where id = $8 returning *",
    [event.user_id, event.title, event.location, event.start, event.enddate, event.description, event.thumbnail, req.params.id])
  .then(result => {
    return res.json(result.rows[0])
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