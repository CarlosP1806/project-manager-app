const router = require('express').Router();
const { authMiddleware, signToken } = require('../../utils/auth');
const User = require('../../models/User');

// Get current user using middleware
router.get('/me', authMiddleware, async ({ user = null, params }, res) => {
  try {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }]
    });
    if (!foundUser) {
      res.status(404).json({ message: 'cannot find user' });
      return;
    }
    res.json(foundUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      res.status(500).json({ message: "something went wrong" });
      return;
    }
    const token = signToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }]
    });
    if (!user) {
      res.status(404).json({ message: "cannot find user" });
      return;
    }

    const correctPwd = req.body.password === user.password;
    if (!correctPwd) {
      res.status(500).json({ message: "invalid credentials" });
      return;
    }
    const token = signToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
