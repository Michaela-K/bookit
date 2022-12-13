const {Router} = require('express');
const router = Router();


module.exports = (pool) => {

  //post /new events data for a user
  router.post('/', (req, res) => {
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
        // req.session["user_id"] = result.rows[0].id;
        // console.log(result.rows[0].id);
        // res.redirect(`/`);
        res.redirect(`/users/${user_id}`);
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
        // req.session["user_id"] = result.rows[0].id;
        // console.log(result.rows[0].id);
        // res.redirect(`/`);
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
