// express
const express = require('express');
const router = express.Router();
// mongo
const User = require('../models/User');
// npm's
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route    GET /register
// @desc     Get registered user
// @access   Public
router.get('/', (req, res) => {
  res.send('Register route')
});

// @route    POST /register
// @desc     Register new user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phoneNumber', 'Phone number needs 10 digits').isLength({ min: 10 }),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('password2', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    let body;
    // try {
    //   body = JSON.parse(req.body);
    // } catch (e) {
    //   console.log(`error parsing: ${e}`);
    // }
    
    // console.log("Processing incoming data");
    console.log("type of: " + typeof req.body);
    console.log("req.body: " + JSON.stringify(req.body));
    console.log("req.body.name: " + req.body.name);

    console.log("type of body: " + typeof body);
    console.log("body: " + JSON.stringify(body));
    console.log("body.name: " + body.name);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Error encountered router post register");
      console.log(`errors array ${JSON.stringify(errors.array()[0])}`);
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, phoneNumber, password, password2 } = req.body;
    console.log("Name from the front end: " + name);
    try {
      // see if email already exists
      let user = await User.findOne({ email }, { unqiue: true });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'Email already taken!' }] });
      }

      user = new User({
        name,
        email,
        phoneNumber,
        password,
        password2
      });

      // // bcrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // save to mongo
      await user.save();

      // return json webtoken
      const payload = {
        user: {
          id: user.id
        }
      }
      // set to 3600 (1 hr) in production
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
        console.log('REGISTER: ', req.body); // object of data sent to the route

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error register')
    }
});

// @route    PUT /register
// @desc     1. Edit name, phone, password
// @access   Private
router.put('/:id', async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!user) {
    // using errorResponse instead of: return res.status(400).json({ success: false });
    return res.send(`User not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true });
  console.log(' ')
  console.log('>>> UPDATED USER');
});

module.exports = router;