const router = require('express').Router();
const User = require('../models/User')

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    // get all users sorted by name
    const userData = await User.findAll({
      order: [['name', 'ASC']],
      attributes: {
        exclude: ['password']
      },
    });
    
    // serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain : true }));

    // pass serialized date in handlebars.js template
    // key of users and value of users
    res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
