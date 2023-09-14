// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// contoller file responsible for routing command to the Model and View parts.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// get route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// method for rendering the "all" handlerbars.js template. 
// this is how we connect each route to the correct template.
  res.render('all');
});

module.exports = router;
