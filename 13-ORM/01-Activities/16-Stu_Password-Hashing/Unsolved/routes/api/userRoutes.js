const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
    // finding one specific user with the email (in this case)
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // bcrypt is taking what is sent in req body (unencrypted user password) 
    //and is comparing it to the enncrypted version
    // that is stored in the db. if they match, returns successful.
    // Not, returns notValid.
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    // if invalid password return message
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
