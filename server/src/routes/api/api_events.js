const { Router } = require("express");
const router = Router();

module.exports = (pool) => {
  //DELETE an event
  router.delete("/:id", (req, res) => {
    const eventId = req.params.id;
    return pool
      .query("DELETE FROM events where id = $1", [eventId])
      .then((result) => {
        if (result.rowCount === 1) {
          // Event deleted successfully
          res.sendStatus(204); // Send a 204 No Content status
        } else {
          // Event with the specified ID was not found
          res.status(404).json({ error: "Event not found" });
        }
      })
      .catch((err) => {
        console.error("Error deleting event:", err);
        res.status(500).json({ error: "Internal server error" });
      });
  });

  //POST //create events data for a user
  router.post("/:user_id", (req, res) => {
    const user_id = 1;
    const attendee ={
      user_name : "You",
      email : "youremail@test.com",
    }
    const event = req.body;
    const eventQueryString = `INSERT INTO events(user_id, title, location, start, enddate, description, thumbnail) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
    const eventValues = [
      user_id,
      event.title,
      event.location,
      event.start,
      event.enddate,
      event.description,
      event.thumbnail,
    ];
    let eventId;

    const attendeeQueryString = `
    INSERT INTO attendees(event_id, user_name, email) VALUES($1, $2, $3) RETURNING *;`;
   
  // Create a Promise for each database query
  const eventPromise = pool.query(eventQueryString, eventValues);
  const attendeePromise = eventPromise.then((eventResult) => {
    eventId = eventResult.rows[0].id;
    return pool.query(attendeeQueryString, [eventId, attendee.user_name, attendee.email]);
  });

  // Wait for both promises to resolve
  Promise.all([eventPromise, attendeePromise])
    .then(([eventResult, attendeeResult]) => {
      res.json({
        event: eventResult.rows[0],
        attendee: attendeeResult.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  //Update one event
  //  api/events/attendees/:eventId
  router.post("/attendees/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    const attendee = req.body;
    console.log(attendee)
    return pool
      .query(
        "INSERT INTO attendees (event_id, user_name, email) VALUES($1, $2, $3) RETURNING *;",
        [
          eventId,
          attendee.user_name,
          attendee.email,
        ]
      )
      .then((result) => {
        return res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Update one event
  //  api/events/edit/:id
  router.post("/edit/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    const event = req.body;
    return pool
      .query(
        "UPDATE events SET user_id = $1, title = $2, location = $3, start = $4, enddate = $5, description = $6, thumbnail = $7 where id = $8 returning *",
        [
          event.user_id,
          event.title,
          event.location,
          event.start,
          event.enddate,
          event.description,
          event.thumbnail,
          eventId,
        ]
      )
      .then((result) => {
        return res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // GET api/events/:user_id
  router.get("/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    return pool
    .query(
      `
      SELECT events.*, ARRAY_AGG(attendees.user_name) AS attendee_user_names
      FROM events
      LEFT JOIN attendees ON events.id = attendees.event_id
      WHERE events.id = $1
      GROUP BY events.id`, [eventId]
    )
      // .query(`SELECT * FROM events WHERE id = $1`, [eventId])
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // GET api/events
  router.get("/", (req, res) => {
    // res.send('List should be in the Terminal Console');
    return pool
      .query(
        `
        SELECT events.*, ARRAY_AGG(attendees.user_name) AS attendee_user_names
        FROM events
        LEFT JOIN attendees ON events.id = attendees.event_id
        GROUP BY events.id;
      `
      )
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
