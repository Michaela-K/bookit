const {Router} = require('express');
const router = Router();


module.exports = (pool) => {

  //post /create events data for a user
  router.post('/:id', (req, res) => {
    const event = req.body
    console.log("post event in server -> create", event);
    const user_id = 1;
    const queryString = `INSERT INTO events(user_id, event.title, event.location, event.start, event.enddate, event.description, event.thumbnail) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
    const values = [user_id, event.title, event.location, event.start, event.enddate, event.description, event.thumbnail];
    return pool
      .query(queryString, values)
      .then(result => {
        console.log("result after creating an event server -> create.js",result);
        if (!result) {
          console.log("post create result", result);
          res.send({error: "error"});
          return;
        }

        res.redirect(`/myevents`);
        })
  });

  //post /events/:id/edit
  router.post('/events/:id/edit', (req, res) => {
    const event = req.body
    const user_id = req.session.user_id;
    const queryString = `INSERT INTO events(user_id, title, category, descrip, thumbnail, link) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`;
    const values = [user_id, event.title, event.category, event.descrip, event.thumbnail, event.link];
    return pool
      .query(queryString, values)
      .then(result => {
        console.log(result);
        if (!result) {
          console.log("post create result", result);
          res.send({error: "error"});
          return;
        }
        res.redirect(`/users/${user_id}`);
        })
  });

  // get basic log in page then give email to user profile page
  router.get('/', (req, res) => {
    const user_id = req.session.user_id;
    if (req.session["user_id"]) {
        const templateVars = {
          "user_id": user_id
        };
        res.render('create', templateVars);
    }
    res.redirect('/')
  })


  return router;
}
