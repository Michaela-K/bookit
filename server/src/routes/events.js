const {Router} = require('express');
const router = Router();
// const {pool} = require('../../lib/db.js')

module.exports = (pool) => {

   // GET /events/search
   router.get("/search", (req, res) => {
    const templateVars = {
      user_id: req.session["user_id"],
      id: req.params.id,
      query: req.body.query
    }
    res.render('search', templateVars);
  })



  // GET /events/:id/edit
  router.get("/:id/edit", (req, res) => {
      const templateVars = {
      user_id: req.session["user_id"],
      id: req.params.id
    }
    res.render('edit', templateVars);
  })

  // POST /events/:id/edit
  router.post("/:id/edit", (req, res) => {
    const event = req.body
    user_id = req.session.user_id;
    let id = req.params.id;
    const queryString = `UPDATE events SET title = $1, category = $2, descrip = $3, thumbnail = $4, link = $5 WHERE id = $6 ;`;
    const values = [event.title, event.category, event.descrip, event.thumbnail, event.link, id];
    return pool
      .query(queryString, values)
      .then(result => {
        console.log(result);
        if (!result) {
          console.log("post edit result", result);
          res.send({error: "error"});
          return;
        }
        res.redirect(`/users/${user_id}`);
      })

  });


  //events/delete/:id
  router.post('/delete/:id', (req, res) => {
    // if (!req.session["user_id"]) {
    //   res.statusCode(400).send("Only authorized users can delete");
    // }
    let user_id = req.session.user_id;
    let id = req.params.id;
    console.log(id)
    const queryString = `DELETE FROM events WHERE id = $1`;
    return pool
      .query(queryString, [id])
      .then(response => {                                        //why does this give error res.redirect is not a function if i put res here instead of response
        res.redirect(`/users/${user_id}`);
      })
      .catch(error => {
        console.log('Error: ', error.message);
      })
      });


  return router;

};